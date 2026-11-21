import React, { useState } from 'react';
import { terminalQuizQuestions } from '../data/siteData';

export default function KesimpulanRefleksi() {
  const [activeTab, setActiveTab] = useState('kesimpulan');

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('bei_clean_reflection');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      studentName: 'Ahmad Faiz Al-Farizi',
      studentId: '0078129045',
      schoolClass: 'XI MIPA 2',
      advisoryTeacher: 'Dra. Sri Wahyuni, M.Pd.',
      personalTakeaway: 'Kunjungan SCBD memberikan ilmu nyata: museum 4 benda bersejarah (prospektus, binokular, kertas saham, HT), 3 lembaga bursa model (BEI pasar, KPEI kasir, KSEI gudang yang diawasi OJK), instrumen saham/obligasi/reksadana, kenapa saham bukan judi, serta pentingnya memastikan aplikasi investasi terdaftar resmi di OJK.',
      financialCommitment: 'Hanya berinvestasi pada aplikasi/sekuritas yang diawasi OJK (seperti Bibit atau sekuritas resmi), selalu ingat prinsip kalo untung besar risikonya juga besar, dan mengutamakan analisis fundamental.'
    };
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('bei_clean_reflection', JSON.stringify(formData));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const handleSelect = (qId, optionIdx) => {
    if (isQuizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const getScore = () => {
    let correct = 0;
    terminalQuizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) correct++;
    });
    return {
      correct,
      total: terminalQuizQuestions.length,
      pct: Math.round((correct / terminalQuizQuestions.length) * 100)
    };
  };

  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1 className="page-heading">Kesimpulan, refleksi dan kuis</h1>
        <p className="page-lead">
          Sintesis hasil pembelajaran kunjungan industri, lembar refleksi individu siswa dan evaluasi materi pasar modal.
        </p>
      </div>

      <div className="subnav-tabs">
        <button
          type="button"
          onClick={() => setActiveTab('kesimpulan')}
          className={`subnav-btn ${activeTab === 'kesimpulan' ? 'active' : ''}`}
        >
          1. Kesimpulan Kunjungan
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('form')}
          className={`subnav-btn ${activeTab === 'form' ? 'active' : ''}`}
        >
          2. Lembar Refleksi Siswa
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('kuis')}
          className={`subnav-btn ${activeTab === 'kuis' ? 'active' : ''}`}
        >
          3. Kuis 5 Soal
        </button>
      </div>

      {activeTab === 'kesimpulan' && (
        <div className="info-card">
          <div className="group-heading">Rangkuman Materi & Catatan Kunjungan SCBD</div>
          <ul className="bullet-list">
            <li>
              <strong>Tiga Lembaga Bursa Model (Diawasi OJK):</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                1. <strong>Bursa Efek Indonesia (BEI)</strong>: Penyelenggara bursa model (Pasar tempat jual beli efek).<br />
                2. <strong>KPEI</strong>: Kasir di bursa model yang bertugas melakukan kliring dan penjaminan transaksi.<br />
                3. <strong>KSEI</strong>: Gudang nya bursa model tempat penyimpanan portofolio efek dan pencatatan SID investor.<br />
                Ketiga lembaga beroperasi di bawah regulasi dan pengawasan langsung <strong>Otoritas Jasa Keuangan (OJK)</strong>.
              </div>
            </li>
            <li>
              <strong>Dimulai dari Benda-Benda Bersejarah (Museum BEI):</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Kunjungan diawali dari melihat koleksi bersejarah: 1. <em>Prospektus</em> (dokumen profil emiten), 2. <em>Binokular</em> (teropong pemantau papan kurs lantai bursa zaman dulu), 3. <em>Kertas Saham</em> (warkat fisik sebelum digitalisasi), dan 4. <em>Handheld Transceiver</em> (HT pialang lantai bursa).
              </div>
            </li>
            <li>
              <strong>Tiga Produk Pasar Modal:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                1. <strong>Saham</strong> (bukti kepemilikan modal di perusahaan).<br />
                2. <strong>Obligasi</strong> (surat utang berjangka dengan janji kupon/imbal hasil tetap).<br />
                3. <strong>Reksa Dana</strong> (wadah dana kelolaan bagi pemodal yang dikelola Manajer Investasi).
              </div>
            </li>
            <li>
              <strong>Keuntungan & Prinsip Risiko:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Keuntungan dari selisih kenaikan harga jual di atas harga beli disebut <strong>Capital Gain</strong>, sedangkan pembagian keuntungan laba bersih perusahaan disebut <strong>Dividen</strong>. Prinsip dasar: <em>"Kalo untungnya besar, risikonya juga besar"</em> (High Risk, High Return).
              </div>
            </li>
            <li>
              <strong>Kenapa Saham Tidak Dibilang Judi?</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Karena saham adalah bukti kepemilikan bisnis riil yang memiliki operasional fisik, pabrik, tenaga kerja, serta laporan keuangan yang diaudit dan diawasi ketat oleh OJK — bukan sekadar tebakan probabilitas tanpa underlying asset.
              </div>
            </li>
            <li>
              <strong>Kalau Perusahaan Penerbit Obligasi Bangkrut:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Pemegang obligasi berstatus sebagai kreditur (pemberi pinjaman). Jika perusahaan dilikuidasi atau pailit, hak pemegang obligasi didahulukan untuk pelunasan aset dibandingkan pemegang saham.
              </div>
            </li>
            <li>
              <strong>Investasi Legal vs Ilegal:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Sebelum berinvestasi, wajib mengetahui legal dan ilegal. Pastikan platform atau aplikasi yang digunakan (seperti sekuritas resmi atau Bibit) terdaftar dan diawasi resmi oleh OJK.
              </div>
            </li>
            <li>
              <strong>Pasar Modal Itu Dinamis & Kode Saham:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Pasar modal bergerak dinamis setiap detik sesi bursa. Setiap perusahaan memiliki kode saham (ticker 4 huruf), seperti produk Indomie di bawah naungan PT Indofood Sukses Makmur Tbk dengan kode <strong>INDF</strong>.
              </div>
            </li>
            <li>
              <strong>Pasar Indonesia vs Pasar Eropa:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Bursa Indonesia menggunakan mata uang Rupiah. Jika berinvestasi menggunakan Rupiah di bursa Eropa/Global, dana akan dikonversi menjadi Dollar (Valas) sehingga terdapat faktor risiko fluktuasi nilai tukar kurs.
              </div>
            </li>
            <li>
              <strong>Menanggapi Perbedaan Dividen Antar Perusahaan:</strong>
              <div style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                Jika tertarik pada beberapa perusahaan dengan dividen yang berbeda, langkah bijak adalah diversifikasi portofolio untuk membagi risiko antara saham dividen stabil dan saham pertumbuhan (capital gain).
              </div>
            </li>
          </ul>
        </div>
      )}

      {activeTab === 'form' && (
        <form onSubmit={handleSave} className="info-card">
          <div className="group-heading">Formulir Refleksi Mandiri Siswa</div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Nama Siswa</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="text-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">NISN</label>
              <input
                type="text"
                required
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                className="text-input font-mono"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Kelas</label>
              <input
                type="text"
                required
                value={formData.schoolClass}
                onChange={(e) => setFormData({ ...formData, schoolClass: e.target.value })}
                className="text-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Guru Pembimbing</label>
              <input
                type="text"
                required
                value={formData.advisoryTeacher}
                onChange={(e) => setFormData({ ...formData, advisoryTeacher: e.target.value })}
                className="text-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Kesan & Pembelajaran Utama</label>
            <textarea
              rows={3}
              required
              value={formData.personalTakeaway}
              onChange={(e) => setFormData({ ...formData, personalTakeaway: e.target.value })}
              className="text-area"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Komitmen Finansial Siswa</label>
            <textarea
              rows={3}
              required
              value={formData.financialCommitment}
              onChange={(e) => setFormData({ ...formData, financialCommitment: e.target.value })}
              className="text-area"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Simpan Refleksi
            </button>
            <button type="button" onClick={() => window.print()} className="btn-secondary">
              Cetak / Simpan PDF
            </button>
            {savedSuccess && <span className="status-badge-success">✓ Tersimpan di browser</span>}
          </div>
        </form>
      )}

      {activeTab === 'kuis' && (
        <div className="quiz-stack">
          {terminalQuizQuestions.map((q, idx) => {
            const selected = userAnswers[q.id];
            const isCorrect = selected === q.correctIndex;

            return (
              <div key={q.id} className="quiz-card">
                <div className="quiz-num">Soal #{idx + 1}</div>
                <h2 className="quiz-prompt">{q.question}</h2>

                <div className="quiz-options-grid">
                  {q.options.map((opt, optIdx) => {
                    let cls = 'quiz-option-btn';
                    if (selected === optIdx) cls += ' selected';
                    if (isQuizSubmitted) {
                      if (optIdx === q.correctIndex) cls += ' correct';
                      else if (selected === optIdx && !isCorrect) cls += ' wrong';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={cls}
                      >
                        {String.fromCharCode(65 + optIdx)}. {opt}
                      </button>
                    );
                  })}
                </div>

                {isQuizSubmitted && (
                  <div className={`quiz-explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                    {isCorrect ? '✓ Benar: ' : '✕ Pembahasan: '} {q.technicalExplanation}
                  </div>
                )}
              </div>
            );
          })}

          <div className="quiz-footer">
            {!isQuizSubmitted ? (
              <button
                type="button"
                onClick={() => setIsQuizSubmitted(true)}
                disabled={Object.keys(userAnswers).length < terminalQuizQuestions.length}
                className="btn-primary"
              >
                Kirim Jawaban Kuis ({Object.keys(userAnswers).length}/{terminalQuizQuestions.length})
              </button>
            ) : (
              <div className="quiz-score-box">
                <div>
                  <strong>Skor Evaluasi: {getScore().correct} / {getScore().total} ({getScore().pct}%)</strong>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setUserAnswers({});
                    setIsQuizSubmitted(false);
                  }}
                  className="btn-secondary"
                >
                  Ulangi Kuis
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
