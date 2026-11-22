import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function IconLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const VISIBLE_COUNT = 5;
const RADIUS_X = 360;
const RADIUS_Y = 70;

function getItemPosition(index, activeIndex, total) {
  const offset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2);
  let adj = offset;
  if (offset > half) adj = offset - total;
  if (offset < -half) adj = offset + total;
  if (Math.abs(adj) > half * 2) return null;

  const angle = (adj / VISIBLE_COUNT) * Math.PI;
  const x = Math.sin(angle) * RADIUS_X;
  const y = -Math.cos(angle) * RADIUS_Y;
  const distance = Math.abs(adj);
  const maxDistance = half + 1;
  const scale = Math.max(0, 1 - (distance / maxDistance) * 0.3);
  const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);
  const zIndex = VISIBLE_COUNT - distance;
  return { x, y, scale, opacity, zIndex, adj };
}

export default function CircularCarousel({ items, autoPlayInterval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const total = items.length;

  const goTo = useCallback(
    (i) => setActiveIndex(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [isHovered, next, autoPlayInterval]);

  useEffect(() => {
    const el = containerRef.current;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    el?.addEventListener('keydown', handler);
    return () => el?.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="circ-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="circ-track">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total);
            if (!pos) return null;
            const isActive = i === activeIndex;
            return (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => goTo(i)}
                aria-label={item.title}
                aria-selected={isActive}
                className={`circ-card${isActive ? ' circ-card--active' : ''}`}
                style={{ transformOrigin: 'center center' }}
              >
                <div className="circ-card-body">
                  <h3 className={`circ-card-title${isActive ? ' circ-card-title--active' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`circ-card-desc${isActive ? ' circ-card-desc--active' : ''}`}>
                    {item.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <span className="circ-section-label" aria-hidden="true">ARTEFAK</span>

      <div className="circ-controls">
        <button onClick={prev} aria-label="Sebelumnya" className="circ-ctrl-btn">
          <IconLeft />
        </button>

        <div className="circ-dots" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={`circ-dot${i === activeIndex ? ' circ-dot--active' : ''}`}
              aria-label={`Item ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={next} aria-label="Berikutnya" className="circ-ctrl-btn">
          <IconRight />
        </button>
      </div>
    </div>
  );
}
