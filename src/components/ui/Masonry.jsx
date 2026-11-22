import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Masonry.css';

const ROOT = 'masonry';
const ITEM = 'masonry__item';
const CARD = 'masonry__card';
const MEDIA = 'masonry__media';
const PARALLAX = 'masonry__parallax';
const IMAGE = 'masonry__image';
const GHOST = 'masonry__ghost';
const BOX = 'masonry-lightbox';
const BOX_BACKDROP = 'masonry-lightbox__backdrop';
const BOX_IMAGE = 'masonry-lightbox__image';
const BOX_CLOSE = 'masonry-lightbox__button masonry-lightbox__close';
const BOX_PREV = 'masonry-lightbox__button masonry-lightbox__prev';
const BOX_NEXT = 'masonry-lightbox__button masonry-lightbox__next';

const DIRECTIONS = ['bottom', 'top', 'left', 'right'];
const ANIMATE_FROM = ['bottom', 'top', 'left', 'right', 'center', 'random', 'none'];
const HOVER_EFFECTS = ['zoom', 'lift', 'tilt', 'none'];
const EASE = 'cubic-bezier(0.2, 0.9, 0.2, 1)';

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const keyOf = item => String(item.id);
const aspectOf = (item, measured) => {
  const w = item.width ?? 0, h = item.height ?? 0;
  if (w > 0 && h > 0) return h / w;
  if (measured[keyOf(item)]) return measured[keyOf(item)];
  return 1;
};
const needsMeasure = item => !((item.height ?? 0) > 0);

const gridOf = (width, columns, columnWidth, gap) => {
  const fixed = Number(columns);
  const count = columns !== 'auto' && fixed > 0
    ? Math.max(1, Math.round(fixed))
    : Math.max(1, Math.floor((width + gap) / (Math.max(40, columnWidth) + gap)));
  return { count, size: Math.max(1, (width - gap * (count - 1)) / count) };
};

const place = (heights, item, grid, gap, measured, commit) => {
  const { count, size } = grid;
  const span = Math.min(count, Math.max(1, Math.round(item.span || 1)));
  let column = 0, top = Infinity;
  for (let start = 0; start <= count - span; start++) {
    let y = 0;
    for (let k = start; k < start + span; k++) y = Math.max(y, heights[k]);
    if (y < top - 0.5) { top = y; column = start; }
  }
  const w = size * span + gap * (span - 1);
  const h = Math.max(1, w * aspectOf(item, measured));
  if (commit) for (let k = column; k < column + span; k++) heights[k] = top + h + gap;
  return { x: Math.round(column * (size + gap)), y: Math.round(top), w, h };
};

const layoutOf = (list, width, columns, columnWidth, gap, measured) => {
  const grid = gridOf(width, columns, columnWidth, gap);
  const heights = new Array(grid.count).fill(0);
  const tiles = list.map(item => ({ item, id: keyOf(item), ...place(heights, item, grid, gap, measured, true) }));
  return { tiles, height: Math.max(0, Math.max(...heights) - gap) };
};

const reduced = () => typeof window !== 'undefined' && (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

function IconClose() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
}
function IconLeft() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
}
function IconRight() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
}

const Masonry = ({
  items = [],
  columns = 'auto',
  columnWidth = 240,
  gap = 12,
  radius = 12,
  animateFrom = 'bottom',
  stagger = 0.05,
  duration = 0.6,
  bounce = 0.15,
  blurToFocus = true,
  revealOnScroll = true,
  hoverEffect = 'zoom',
  focusOnHover = false,
  captions = 'none',
  parallax = 0,
  lightbox = true,
  draggable = false,
  onItemClick,
  className = '',
  style
}) => {
  const rootRef = useRef(null);
  const nodes = useRef(new Map());
  const springs = useRef(new Map());
  const loaded = useRef(new Set());
  const waiting = useRef(new Set());
  const pending = useRef(new Set());
  const engine = useRef({ raf: 0, last: 0, flush: 0 });
  const suppressRef = useRef(false);
  const ghostsRef = useRef(new Map());
  const previousRef = useRef(new Map());
  const boxRef = useRef(null);
  const tokenRef = useRef(0);
  const lastShownRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [measured, setMeasured] = useState({});
  const [ready, setReady] = useState(() => !items.some(needsMeasure));
  const [ghosts, setGhosts] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [closing, setClosing] = useState(false);

  const settings = {
    gap: Math.max(0, gap),
    animateFrom: ANIMATE_FROM.includes(animateFrom) ? animateFrom : 'bottom',
    stagger: Math.max(0, stagger),
    duration: Math.max(0.05, duration),
    bounce: clamp(bounce, 0, 0.9),
    blurToFocus, revealOnScroll,
    hoverEffect: HOVER_EFFECTS.includes(hoverEffect) ? hoverEffect : 'zoom',
    focusOnHover, parallax: clamp(parallax, 0, 1), lightbox, draggable, onItemClick
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  const itemsKey = items.map(keyOf).join('\0');

  const layout = useMemo(
    () => (width && ready ? layoutOf(items, width, columns, columnWidth, settings.gap, measured) : null),
    [items, width, ready, columns, columnWidth, settings.gap, measured]
  );
  const layoutRef = useRef(layout);
  layoutRef.current = layout;
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const measuredRef = useRef(measured);
  measuredRef.current = measured;

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(root);
    setWidth(Math.round(root.getBoundingClientRect().width));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const known = measuredRef.current;
    const missing = itemsRef.current.filter(item => needsMeasure(item) && !known[keyOf(item)]);
    if (!missing.length) { setReady(true); return; }
    let cancelled = false;
    const timer = setTimeout(() => { if (!cancelled) setReady(true); }, 2500);
    missing.forEach(item => {
      const img = new Image();
      img.onload = () => {
        if (cancelled || !img.naturalWidth) return;
        setMeasured(cur => ({ ...cur, [keyOf(item)]: img.naturalHeight / img.naturalWidth }));
      };
      img.src = item.img;
    });
    return () => { cancelled = true; clearTimeout(timer); };
  }, [itemsKey]);

  useEffect(() => {
    if (ready) return;
    if (items.every(item => !needsMeasure(item) || measured[keyOf(item)])) setReady(true);
  }, [measured, ready, items]);

  const paint = (id, spring) => {
    const node = nodes.current.get(id);
    if (!node) return;
    node.style.transform = `translate3d(${spring.x}px, ${spring.y}px, 0) scale(${spring.s})`;
    if (spring.reveal < 1) {
      const eased = 1 - Math.pow(1 - Math.max(0, spring.reveal), 3);
      node.style.opacity = String(eased);
      node.style.filter = spring.blur ? `blur(${((1 - eased) * 12).toFixed(2)}px)` : '';
    } else if (node.style.opacity !== '') {
      node.style.opacity = '';
      node.style.filter = '';
    }
  };

  const frame = now => {
    const state = engine.current;
    state.raf = 0;
    const s = settingsRef.current;
    const elapsed = clamp((now - state.last) / 1000, 0, 1 / 20);
    state.last = now;
    const omega = (Math.PI * 2) / s.duration;
    const zeta = clamp(1 - s.bounce, 0.1, 1);
    const steps = Math.max(1, Math.ceil(elapsed / (1 / 240)));
    const dt = elapsed / steps;
    let active = false;
    springs.current.forEach((spring, id) => {
      if (!spring.shown) return;
      if (now < spring.start) { active = true; return; }
      for (let i = 0; i < steps; i++) {
        spring.vx += (-omega * omega * (spring.x - spring.tx) - 2 * zeta * omega * spring.vx) * dt;
        spring.vy += (-omega * omega * (spring.y - spring.ty) - 2 * zeta * omega * spring.vy) * dt;
        spring.vs += (-omega * omega * (spring.s - 1) - 2 * zeta * omega * spring.vs) * dt;
        spring.x += spring.vx * dt;
        spring.y += spring.vy * dt;
        spring.s += spring.vs * dt;
      }
      const resting =
        Math.abs(spring.x - spring.tx) < 0.05 && Math.abs(spring.y - spring.ty) < 0.05 &&
        Math.abs(spring.s - 1) < 0.0005 && Math.abs(spring.vx) + Math.abs(spring.vy) < 0.05 && Math.abs(spring.vs) < 0.001;
      if (resting) { spring.x = spring.tx; spring.y = spring.ty; spring.s = 1; spring.vx = spring.vy = spring.vs = 0; }
      else active = true;
      if (spring.reveal < 1) {
        spring.reveal = clamp((now - spring.start) / (s.duration * 1000), 0, 1);
        if (spring.reveal < 1) active = true;
      }
      paint(id, spring);
    });
    if (active) state.raf = requestAnimationFrame(frame);
  };

  const kick = () => {
    const state = engine.current;
    if (state.raf || typeof window === 'undefined') return;
    state.last = performance.now();
    state.raf = requestAnimationFrame(frame);
  };

  const flushReveals = () => {
    engine.current.flush = 0;
    const s = settingsRef.current;
    const batch = [];
    pending.current.forEach(id => {
      const spring = springs.current.get(id);
      if (spring && !spring.shown) batch.push({ id, spring });
    });
    pending.current.clear();
    if (!batch.length) return;
    batch.sort((a, b) => a.spring.ty - b.spring.ty || a.spring.tx - b.spring.tx);
    const now = performance.now();
    const still = reduced() || s.animateFrom === 'none';
    batch.forEach(({ id, spring }, rank) => {
      spring.shown = true;
      spring.blur = s.blurToFocus && !still;
      if (still) { spring.x = spring.tx; spring.y = spring.ty; spring.s = 1; spring.reveal = 1; spring.start = now; paint(id, spring); return; }
      const direction = s.animateFrom === 'random' ? DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)] : s.animateFrom;
      const distance = 60 + Math.min(spring.h, 280) * 0.35;
      spring.x = spring.tx; spring.y = spring.ty; spring.s = 0.96;
      if (direction === 'bottom') spring.y += distance;
      else if (direction === 'top') spring.y -= distance;
      else if (direction === 'left') spring.x -= distance;
      else if (direction === 'right') spring.x += distance;
      spring.vx = spring.vy = spring.vs = 0;
      spring.reveal = 0;
      spring.start = now + rank * s.stagger * 1000;
      paint(id, spring);
    });
    kick();
  };

  const requestReveal = id => {
    const spring = springs.current.get(id);
    if (!spring || spring.shown) return;
    if (!loaded.current.has(id)) { waiting.current.add(id); return; }
    waiting.current.delete(id);
    pending.current.add(id);
    if (!engine.current.flush) engine.current.flush = requestAnimationFrame(flushReveals);
  };
  const revealRef = useRef(requestReveal);
  revealRef.current = requestReveal;

  const markLoaded = id => {
    loaded.current.add(id);
    const node = nodes.current.get(id);
    node?.querySelector('img')?.setAttribute('data-loaded', '');
    node?.querySelector('.' + MEDIA)?.setAttribute('data-loaded', '');
    if (waiting.current.has(id)) requestReveal(id);
  };

  useIsoLayoutEffect(() => {
    if (!layout) return;
    const root = rootRef.current;
    const instant = reduced();
    layout.tiles.forEach(tile => {
      const node = nodes.current.get(tile.id);
      let spring = springs.current.get(tile.id);
      if (!spring) {
        spring = { x: tile.x, y: tile.y, s: 1, vx: 0, vy: 0, vs: 0, tx: tile.x, ty: tile.y, w: tile.w, h: tile.h, shown: false, blur: false, reveal: 0, start: 0 };
        springs.current.set(tile.id, spring);
        if (node) { node.style.opacity = '0'; node.style.transform = `translate3d(${tile.x}px, ${tile.y}px, 0)`; }
      }
      spring.tx = tile.x; spring.ty = tile.y; spring.w = tile.w; spring.h = tile.h;
      if (!spring.shown) { spring.x = tile.x; spring.y = tile.y; if (node) node.style.transform = `translate3d(${tile.x}px, ${tile.y}px, 0)`; }
      else if (instant) { spring.x = tile.x; spring.y = tile.y; spring.s = 1; paint(tile.id, spring); }
      previousRef.current.set(tile.id, { item: tile.item, w: tile.w, h: tile.h });
    });
    if (root) root.style.height = `${layout.height}px`;
    kick();
  });

  useEffect(() => {
    if (!layout) return;
    const ids = layout.tiles.map(t => t.id);
    const reveal = revealRef.current;
    if (!settingsRef.current.revealOnScroll || typeof IntersectionObserver === 'undefined') { ids.forEach(reveal); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('data-id');
        if (id) reveal(id);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    ids.forEach(id => { const node = nodes.current.get(id); if (node && !springs.current.get(id)?.shown) observer.observe(node); });
    return () => observer.disconnect();
  }, [layout, revealOnScroll]);

  useEffect(() => {
    const state = engine.current;
    return () => { cancelAnimationFrame(state.raf); cancelAnimationFrame(state.flush); };
  }, []);

  useEffect(() => {
    ghosts.forEach(ghost => {
      const node = ghostsRef.current.get(ghost.id);
      if (!node || node.getAttribute('data-leaving')) return;
      node.setAttribute('data-leaving', '');
      const animation = node.animate([{ opacity: 1 }, { opacity: 0 }], { duration: reduced() ? 1 : 320, easing: 'ease', fill: 'forwards' });
      animation.finished.then(() => setGhosts(cur => cur.filter(e => e.id !== ghost.id))).catch(() => {});
    });
  }, [ghosts]);

  const onCardClick = (event, item, index) => {
    if (suppressRef.current) { event.preventDefault(); return; }
    const s = settingsRef.current;
    s.onItemClick?.(item, index, event);
    if (event.defaultPrevented) return;
    if (s.lightbox) { event.preventDefault(); tokenRef.current += 1; setClosing(false); setOpenId(keyOf(item)); }
  };

  const openIndex = openId ? items.findIndex(item => keyOf(item) === openId) : -1;
  const openItem = openIndex >= 0 ? items[openIndex] : null;

  const mediaRect = id => nodes.current.get(id)?.querySelector('[data-media]')?.getBoundingClientRect() ?? null;

  const frameFor = item => {
    const aspect = aspectOf(item, measured);
    const pad = window.innerWidth < 640 ? 16 : 72;
    const maxW = Math.max(40, window.innerWidth - pad * 2);
    const maxH = Math.max(40, window.innerHeight - pad * 2);
    let w = maxW, h = w * aspect;
    if (h > maxH) { h = maxH; w = h / aspect; }
    return { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2, width: w, height: h };
  };

  const closeBox = () => {
    if (!openId || closing) return;
    tokenRef.current += 1;
    const token = tokenRef.current;
    const box = boxRef.current;
    const image = box?.querySelector('[data-box-image]');
    const backdrop = box?.querySelector('[data-box-backdrop]');
    const rect = mediaRect(openId);
    setClosing(true);
    if (!image || !rect || reduced()) { setOpenId(null); setClosing(false); return; }
    const current = image.getBoundingClientRect();
    const scale = rect.width / current.width;
    image.getAnimations().forEach(a => a.cancel());
    const animation = image.animate([
      { transform: 'none', borderRadius: '6px' },
      { transform: `translate(${rect.left - current.left}px, ${rect.top - current.top}px) scale(${scale})`, borderRadius: `${radius / Math.max(scale, 0.01)}px` }
    ], { duration: 380, easing: EASE, fill: 'forwards' });
    backdrop?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease', fill: 'forwards' });
    animation.finished.then(() => { if (token !== tokenRef.current) return; setOpenId(null); setClosing(false); }).catch(() => {});
  };

  const stepBox = dir => {
    if (!openItem || closing || items.length < 2) return;
    const next = items[(openIndex + dir + items.length) % items.length];
    setOpenId(keyOf(next));
  };

  useIsoLayoutEffect(() => {
    if (!openId) return;
    const node = nodes.current.get(openId);
    node?.setAttribute('data-hidden', '');
    return () => node?.removeAttribute('data-hidden');
  }, [openId]);

  const openedRef = useRef(null);
  useIsoLayoutEffect(() => {
    const box = boxRef.current;
    if (!openId || !box) { openedRef.current = null; return; }
    const image = box.querySelector('[data-box-image]');
    const backdrop = box.querySelector('[data-box-backdrop]');
    if (!image) return;
    if (openedRef.current) {
      image.animate([{ opacity: 0, transform: 'scale(0.97)' }, { opacity: 1, transform: 'none' }], { duration: reduced() ? 1 : 320, easing: EASE });
      openedRef.current = openId;
      return;
    }
    openedRef.current = openId;
    const rect = mediaRect(openId);
    const target = image.getBoundingClientRect();
    if (rect && !reduced()) {
      const scale = rect.width / target.width;
      image.animate([
        { transform: `translate(${rect.left - target.left}px, ${rect.top - target.top}px) scale(${scale})`, borderRadius: `${radius / Math.max(scale, 0.01)}px` },
        { transform: 'none', borderRadius: '6px' }
      ], { duration: 520, easing: EASE });
      backdrop?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, easing: 'ease' });
    }
  }, [openId]);

  if (openId) lastShownRef.current = openId;
  const isOpen = Boolean(openId);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    boxRef.current?.querySelector('[data-box-close]')?.focus({ preventScroll: true });
    const map = nodes.current;
    return () => {
      document.documentElement.style.overflow = previous;
      map.get(lastShownRef.current)?.querySelector('[data-card]')?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!openId) return;
    const onKey = event => {
      if (event.key === 'Escape') closeBox();
      else if (event.key === 'ArrowRight') stepBox(1);
      else if (event.key === 'ArrowLeft') stepBox(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const mode = settings.hoverEffect;
  const box = openItem && typeof document !== 'undefined' ? frameFor(openItem) : null;

  return (
    <div
      ref={rootRef}
      className={[ROOT, className].filter(Boolean).join(' ')}
      style={{ '--masonry-radius': `${Math.max(0, radius)}px`, ...style }}
      data-hover={mode}
      role="list"
    >
      {(layout?.tiles ?? []).map((tile, index) => {
        const { item } = tile;
        const id = tile.id;
        return (
          <div
            key={id}
            ref={node => { if (node) nodes.current.set(id, node); else nodes.current.delete(id); }}
            className={ITEM}
            style={{ width: tile.w, height: tile.h }}
            data-id={id}
            role="listitem"
          >
            <button
              className={CARD}
              data-card=""
              type="button"
              aria-label={item.alt || item.title || `Photo ${index + 1}`}
              onClick={event => onCardClick(event, item, index)}
              onPointerEnter={() => { if (settings.focusOnHover) nodes.current.forEach((n, nid) => { if (nid !== id) n.setAttribute('data-dimmed', ''); else n.removeAttribute('data-dimmed'); }); }}
              onPointerLeave={event => { if (settings.focusOnHover) nodes.current.forEach(n => n.removeAttribute('data-dimmed')); event.currentTarget.style.removeProperty('--masonry-tilt-x'); event.currentTarget.style.removeProperty('--masonry-tilt-y'); }}
            >
              <span className={MEDIA} data-media="" data-loaded={loaded.current.has(id) ? '' : undefined}>
                <span className={PARALLAX} data-parallax="">
                  <img
                    className={IMAGE}
                    src={item.img}
                    alt={item.alt ?? ''}
                    draggable={false}
                    decoding="async"
                    data-loaded={loaded.current.has(id) ? '' : undefined}
                    ref={img => { if (img?.complete && img.naturalWidth && !loaded.current.has(id)) markLoaded(id); }}
                    onLoad={() => markLoaded(id)}
                    onError={() => markLoaded(id)}
                  />
                </span>
              </span>
            </button>
          </div>
        );
      })}
      {ghosts.map(ghost => (
        <div
          key={`ghost-${ghost.id}`}
          ref={node => { if (node) ghostsRef.current.set(ghost.id, node); else ghostsRef.current.delete(ghost.id); }}
          className={GHOST}
          style={{ width: ghost.w, height: ghost.h, transform: `translate3d(${ghost.x}px, ${ghost.y}px, 0)` }}
          aria-hidden="true"
        >
          <div className={MEDIA}><img className={IMAGE} src={ghost.item.img} alt="" data-loaded="" draggable={false} /></div>
        </div>
      ))}
      {openItem && box && createPortal(
        <div ref={boxRef} className={BOX} role="dialog" aria-modal="true" aria-label="Photo">
          <div className={BOX_BACKDROP} data-box-backdrop="" onClick={closeBox} />
          <img
            className={BOX_IMAGE}
            data-box-image=""
            src={openItem.img}
            alt={openItem.alt ?? ''}
            draggable={false}
            style={{ width: box.width, height: box.height, left: box.left, top: box.top, borderRadius: 6 }}
            onClick={closeBox}
          />
          <button type="button" className={BOX_CLOSE} data-box-fade="" data-box-close="" aria-label="Close" onClick={closeBox}><IconClose /></button>
          {items.length > 1 && <>
            <button type="button" className={BOX_PREV} data-box-fade="" aria-label="Previous" onClick={() => stepBox(-1)}><IconLeft /></button>
            <button type="button" className={BOX_NEXT} data-box-fade="" aria-label="Next" onClick={() => stepBox(1)}><IconRight /></button>
          </>}
        </div>,
        document.body
      )}
    </div>
  );
};

export default Masonry;
