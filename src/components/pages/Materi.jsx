import React, { useState } from 'react';
import { institutionalProfile } from '../../data/siteData';
import CircularCarousel from '../ui/CircularCarousel';
import ceoImg from '../../assets/ceo.webp';

export default function Materi() {
  const tigaLembaga = institutionalProfile.tigaLembagaModel;
  const museumItems = institutionalProfile.museumItems;
  const produkList = institutionalProfile.produkPasarModal;
  const [activeProduk, setActiveProduk] = useState(0);

  return (
    <div className="broadsheet-root">
      <section className="quote-reel-wrapper quote-reel-open">
        <div className="quote-reel-stage">
          <div className="quote-reel-beehive-cluster" aria-hidden="true">
            <div className="beehive-col beehive-col-left">
              <div className="tile-cell cell-fade-deep" />
              <div className="tile-cell cell-fade-mid" />
              <div className="tile-cell cell-fade-deep" />
            </div>
            <div className="beehive-col beehive-col-center">
              <div className="tile-cell cell-fade-mid" />
              <div className="tile-featured">
                <img
                  src={ceoImg}
                  alt="Edukasi OJK"
                  className="featured-portrait-img"
                />
                <div className="featured-sheen-overlay" />
              </div>
              <div className="tile-cell cell-fade-mid" />
            </div>
            <div className="beehive-col beehive-col-right">
              <div className="tile-cell cell-fade-deep" />
              <div className="tile-cell cell-fade-mid" />
              <div className="tile-cell cell-fade-deep" />
            </div>
          </div>

          <div className="quote-reel-content-col">
            <svg
              className="quote-svg-mark"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z" />
            </svg>

            <div className="quote-text-stage">
              <p className="quote-headline-text">
                Legal di sini artinya memastikan bahwa produk atau layanan yang ditawarkan tersebut sudah memiliki izin usaha yang tepat dari otoritas atau lembaga yang mengawasi, seperti Otoritas Jasa Keuangan.
              </p>
              <p className="quote-author-text">
                Jeffrey Hendrik
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="broadsheet-section">
        <div className="broadsheet-grid-3">
          {tigaLembaga.map((item) => (
            <article key={item.code} className="broadsheet-col broadsheet-card">
              <h3 className="story-headline">{item.nama}</h3>
              <p className="story-summary">{item.keterangan}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="story-summary-lead">
        Saat kunjungan, siswa diajarkan cara jual beli saham serta alur investasi menggunakan perantara pedagang efek (sekuritas) maupun aplikasi reksadana/saham mitra terpercaya (seperti Bibit dan aplikasi sekuritas resmi). Seluruh rekening dana nasabah (RDN) tersimpan aman dan terpisah dari perusahaan sekuritas.
      </p>

      <section className="broadsheet-section">
        <CircularCarousel
          items={museumItems.map((b) => ({
            id: String(b.nomor),
            title: b.nama,
            description: b.fungsi,
            tag: `ARTEFAK ${b.nomor}`,
          }))}
        />
      </section>

      <section className="broadsheet-section">
        <div className="produk-tabs">
          <div className="produk-tab-list" role="tablist">
            <span className="produk-tab-anchor">Produk</span>
            {produkList.map((p, i) => (
              <button
                key={p.nomor}
                role="tab"
                aria-selected={i === activeProduk}
                onClick={() => setActiveProduk(i)}
                className={`produk-tab-btn${i === activeProduk ? ' produk-tab-btn--active' : ''}`}
              >
                {p.nama}
              </button>
            ))}
          </div>
          <div className="produk-tab-panel">
            <p className="produk-tab-desc">{produkList[activeProduk].definisi}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
