import React from 'react';

const schedule = [
  { jam: '06.30 – 07.30', kegiatan: 'Persiapan Pemberangkatan', desc: 'Berkumpul di SMKN 2 Jakarta, pengecekan peserta, pengarahan singkat dari guru pembimbing, dan persiapan keberangkatan.' },
  { jam: '07.30 – 09.00', kegiatan: 'Perjalanan menuju BEI', desc: 'Pemberangkatan rombongan dari SMKN 2 Jakarta menuju Gedung Bursa Efek Indonesia, Kawasan SCBD, Jakarta Selatan.' },
  { jam: '09.00 – 10.30', kegiatan: 'Kegiatan di BEI', desc: 'Kunjungan ke Galeri Investasi dan Museum BEI, sesi edukasi pasar modal, pengenalan 3 lembaga SRO (BEI, KPEI, KSEI), serta presentasi dari perwakilan BEI.' },
  { jam: '10.30 – 11.30', kegiatan: 'Perjalanan menuju Museum Bank Indonesia', desc: 'Perjalanan dari Kawasan SCBD menuju Museum Bank Indonesia di Kota Tua, Jakarta Barat.' },
  { jam: '11.30 – 13.00', kegiatan: 'Ishoma', desc: 'Istirahat, sholat, dan makan siang bersama. Waktu bebas untuk peserta sebelum melanjutkan kegiatan.' },
  { jam: '13.00 – 14.00', kegiatan: 'Kegiatan di Museum Bank Indonesia', desc: 'Tur edukasi Museum Bank Indonesia: sejarah perbankan nasional, koleksi numismatik, dan perkembangan sistem moneter Indonesia.' },
  { jam: '14.00 – 15.00', kegiatan: 'Perjalanan pulang ke SMKN 2 Jakarta', desc: 'Rombongan bertolak dari Museum Bank Indonesia kembali ke SMKN 2 Jakarta dan kembali ke masing-masing.' },
];

export default function Rangkaian() {
  return (
    <div className="broadsheet-root">
      <div className="timeline-wrapper">
        {schedule.map((item, i) => (
          <div key={i} className="timeline-row">
            <div className="timeline-left">
              <span className="timeline-jam">{item.jam}</span>
            </div>
            <div className="timeline-spine">
              <div className="timeline-line-top" />
              <div className="timeline-dot" />
              <div className="timeline-line-bottom" />
            </div>
            <div className="timeline-right">
              <h3 className="timeline-title">{item.kegiatan}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
