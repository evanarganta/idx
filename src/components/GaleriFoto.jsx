import React, { useState } from 'react';
import { documentaryPlates } from '../data/siteData';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function GaleriFoto() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const idx = documentaryPlates.findIndex((p) => p.plateId === selectedPhoto.plateId);
    setSelectedPhoto(documentaryPlates[(idx + 1) % documentaryPlates.length]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const idx = documentaryPlates.findIndex((p) => p.plateId === selectedPhoto.plateId);
    setSelectedPhoto(documentaryPlates[(idx - 1 + documentaryPlates.length) % documentaryPlates.length]);
  };

  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1 className="page-heading">Galeri kunjungan industri</h1>
        <p className="page-lead">
          Dua belas dokumentasi foto studi lapangan siswa kelas XI di Gedung Bursa Efek Indonesia.
        </p>
      </div>

      <div className="gallery-grid">
        {documentaryPlates.map((item, idx) => (
          <div
            key={item.plateId}
            className="photo-card"
            onClick={() => setSelectedPhoto(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setSelectedPhoto(item);
            }}
          >
            <div className="photo-media-box">
              <img src={item.sourceUrl} alt={item.title} className="photo-img" loading="lazy" />
              <span className="photo-tag font-mono">#{idx + 1}</span>
            </div>
            <div className="photo-meta-box">
              <h2 className="photo-name">{item.title}</h2>
              <span className="photo-timestamp font-mono">{item.recordedAt}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrap">
              <img src={selectedPhoto.sourceUrl} alt={selectedPhoto.title} className="lightbox-img" />
              <button type="button" onClick={handlePrev} className="lightbox-nav-btn prev" aria-label="Sebelumnya">
                <ChevronLeftIcon size={16} />
              </button>
              <button type="button" onClick={handleNext} className="lightbox-nav-btn next" aria-label="Selanjutnya">
                <ChevronRightIcon size={16} />
              </button>
            </div>

            <div className="lightbox-caption">
              <div className="caption-top-line">
                <h3 className="caption-title">{selectedPhoto.title}</h3>
                <button type="button" onClick={() => setSelectedPhoto(null)} className="close-btn" aria-label="Tutup">
                  <XIcon size={16} />
                </button>
              </div>
              <p className="caption-desc">{selectedPhoto.curatorialNotes}</p>
              <span className="caption-time font-mono">{selectedPhoto.recordedAt}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
