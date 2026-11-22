import React from 'react';
import Masonry from '../ui/Masonry';

const imageModules = import.meta.glob('/src/assets/images/*', { eager: true });

const rawItems = Object.entries(imageModules).map(([path, mod], i) => ({
  id: String(i + 1),
  img: mod.default,
  alt: '',
}));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const items = shuffle(rawItems);

export default function Galeri() {
  if (items.length === 0) {
    return (
      <div className="galeri-empty">
        <p>Tambahkan foto ke <code>src/assets/images/</code> untuk menampilkan galeri.</p>
      </div>
    );
  }

  return (
    <div className="galeri-root">
      <Masonry
        items={items}
        columns="auto"
        maxColumns={4}
        columnWidth={190}
        gap={10}
        radius={10}
        animateFrom="none"
        blurToFocus={false}
        revealOnScroll={false}
        hoverEffect="zoom"
        captions="none"
        lightbox={true}
        draggable={false}
      />
    </div>
  );
}
