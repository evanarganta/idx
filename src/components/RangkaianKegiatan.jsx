import React from 'react';
import { itineraryProtocol } from '../data/siteData';

export default function RangkaianKegiatan() {
  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1 className="page-heading">Jadwal & Agenda Kunjungan Industri</h1>
        <p className="page-lead">
          Enam sesi studi lapangan siswa kelas XI di Gedung Bursa Efek Indonesia, SCBD Jakarta (07:30 - 12:30 WIB).
        </p>
      </div>

      <div className="sessions-stack">
        {itineraryProtocol.map((s) => (
          <div key={s.step} className="session-card">
            <div className="session-time-col font-mono">
              <span className="session-number">{s.step}</span>
              <span className="session-hour">{s.timeWindow}</span>
            </div>
            <div className="session-info-col">
              <h2 className="session-name">{s.sessionName}</h2>
              <div className="session-location">{s.venue}</div>
              <p className="session-summary">{s.logNotes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
