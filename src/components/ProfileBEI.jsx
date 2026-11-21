import React from 'react';
import { institutionalProfile } from '../data/siteData';

export default function ProfileBEI() {
  const tigaLembaga = institutionalProfile.tigaLembagaModel;
  const museumItems = institutionalProfile.museumItems;
  const produkList = institutionalProfile.produkPasarModal;

  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1 className="page-heading">TENTANG BURSA EFEK INDONESIA</h1>
        <p className="page-lead">
          Rangkuman materi observasi kunjungan industri di Gedung Bursa Efek Indonesia, SCBD Jakarta Selatan.
        </p>
      </div>

      <div className="info-card">
        <div className="card-label">Pengawasan Regulasi</div>
        <div className="motto-text">"Diawasi Langsung oleh Otoritas Jasa Keuangan (OJK)"</div>
        <p className="card-body-text">
          Sebelum investasi harus tahu legal dan ilegal. Pastikan setiap platform atau aplikasi (seperti Bibit, sekuritas resmi, dll) berstatus resmi dan diawasi oleh OJK agar dana investor terlindungi hukum.
        </p>
      </div>

      <div className="group-block">
        <div className="group-heading">Tiga Lembaga Bursa Model (Diawasi OJK)</div>
        <div className="sro-grid">
          {tigaLembaga.map((item) => (
            <div key={item.code} className="content-card">
              <span className="code-badge">{item.code}</span>
              <h2 className="card-title">{item.nama}</h2>
              <div className="card-sub text-highlight" style={{ fontWeight: 600, color: '#ffffff' }}>
                {item.analogi}
              </div>
              <p className="card-text">{item.keterangan}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="group-block">
        <div className="group-heading">Dimulai dari Benda-Benda Bersejarah (Museum BEI)</div>
        <div className="sro-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {museumItems.map((b) => (
            <div key={b.nomor} className="content-card">
              <span className="code-badge font-mono">0{b.nomor}</span>
              <h2 className="card-title">{b.nama}</h2>
              <p className="card-text">{b.fungsi}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="group-block">
        <div className="group-heading">Tiga Produk Pasar Modal</div>
        <div className="sro-grid">
          {produkList.map((p) => (
            <div key={p.nomor} className="content-card">
              <span className="code-badge font-mono">PRODUK {p.nomor}</span>
              <h2 className="card-title">{p.nama}</h2>
              <p className="card-text">{p.definisi}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="group-block">
        <div className="group-heading">Cara Jual-Beli & Memulai Investasi</div>
        <div className="info-card">
          <p className="card-body-text">
            Saat kunjungan, siswa diajarkan cara jual beli saham serta alur investasi menggunakan perantara pedagang efek (sekuritas) maupun aplikasi reksadana/saham mitra terpercaya (seperti Bibit dan aplikasi sekuritas resmi). Seluruh rekening dana nasabah (RDN) tersimpan aman dan terpisah dari perusahaan sekuritas.
          </p>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-cell">
          <span className="metric-val font-mono">3</span>
          <span className="metric-sub">Lembaga Bursa Model (BEI, KPEI, KSEI)</span>
        </div>
        <div className="metric-cell">
          <span className="metric-val font-mono">4</span>
          <span className="metric-sub">Benda Bersejarah di Museum</span>
        </div>
        <div className="metric-cell">
          <span className="metric-val font-mono">OJK</span>
          <span className="metric-sub">Pengawas & Penjamin Legalitas</span>
        </div>
      </div>
    </div>
  );
}
