// DATASET RESMI PORTOFOLIO KUNJUNGAN INDUSTRI PT BURSA EFEK INDONESIA
// Kurikulum Ekonomi & Pasar Modal - Penugasan Mandiri Siswa Kelas XI

export const terminalSnapshotData = {
  marketStatus: 'TERTUTUP (SESI REGULER SELESAI)',
  marketDate: '21 NOVEMBER 2026',
  tradingSystem: 'JATS NEXT-G v9.4',
  ihsgSnapshot: {
    symbol: 'IHSG',
    name: 'Indeks Harga Saham Gabungan (Composite Index)',
    value: '7.326,45',
    delta: '+42,18',
    percentage: '+0,58%',
    isUp: true,
    dayRange: '7.288,10 - 7.335,90',
    volume: '18,4 Miliar Lembar',
    turnover: 'Rp 11,24 Triliun',
    frequency: '1.240.812 Transaksi'
  },
  benchmarkStocks: [
    { code: 'BBCA', company: 'Bank Central Asia Tbk', price: '9.850', change: '+150', percent: '+1,55%', isUp: true, cap: 'Rp 1.214 T' },
    { code: 'BBRI', company: 'Bank Rakyat Indonesia Tbk', price: '5.300', change: '+75', percent: '+1,44%', isUp: true, cap: 'Rp 803 T' },
    { code: 'BMRI', company: 'Bank Mandiri (Persero) Tbk', price: '6.750', change: '+125', percent: '+1,89%', isUp: true, cap: 'Rp 630 T' },
    { code: 'TLKM', company: 'Telkom Indonesia Tbk', price: '3.780', change: '-20', percent: '-0,53%', isUp: false, cap: 'Rp 374 T' },
    { code: 'ASII', company: 'Astra International Tbk', price: '5.125', change: '+50', percent: '+0,99%', isUp: true, cap: 'Rp 207 T' },
    { code: 'ICBP', company: 'Indofood CBP Sukses Makmur Tbk', price: '11.400', change: '+100', percent: '+0,88%', isUp: true, cap: 'Rp 132 T' },
    { code: 'GOTO', company: 'GoTo Gojek Tokopedia Tbk', price: '78', change: '-1', percent: '-1,27%', isUp: false, cap: 'Rp 93 T' }
  ]
};

export const institutionalProfile = {
  formalName: 'PT Bursa Efek Indonesia (Indonesia Stock Exchange / IDX)',
  legalEntity: 'Penyelenggara Pasar Modal Resmi di bawah Otoritas Jasa Keuangan (OJK)',
  regulatoryAuthority: 'Otoritas Jasa Keuangan (OJK) Republik Indonesia',
  statutoryMotto: 'Paham, Punya, Pantau — Investasi Cerdas & Berizin Resmi',
  operationalOverview: 'Kunjungan industri SCBD mempelajari mekanisme perdagangan efek, ekosistem 3 lembaga bursa (BEI, KPEI, KSEI) yang diawasi OJK, koleksi museum bersejarah, instrumen pasar modal, serta edukasi investasi legal bagi generasi muda.',
  tigaLembagaModel: [
    {
      code: 'BEI',
      nama: 'Bursa Efek Indonesia',
      analogi: 'Pasar Bursa Model',
      peran: 'Penyelenggara Perdagangan Efek',
      keterangan: 'Tempat bertemunya penjual dan pembeli efek melalui sistem bursa resmi.'
    },
    {
      code: 'KPEI',
      nama: 'Kliring Penjaminan Efek Indonesia',
      analogi: 'Kasir di Bursa Model',
      peran: 'Kliring dan Penjaminan Transaksi',
      keterangan: 'Memastikan proses serah terima uang dan efek berjalan teratur, pasti, dan terjamin.'
    },
    {
      code: 'KSEI',
      nama: 'Kustodian Sentral Efek Indonesia',
      analogi: 'Gudang nya Bursa Model',
      peran: 'Penyimpanan dan Administrasi Efek',
      keterangan: 'Tempat penyimpanan terpusat portofolio saham, obligasi, dan pencatatan SID investor.'
    }
  ],
  pengawas: {
    nama: 'Otoritas Jasa Keuangan (OJK)',
    peran: 'Regulator & Pengawas Tertinggi',
    prinsip: 'Sebelum investasi harus tahu legal dan ilegal; pastikan aplikasi investasi resmi diawasi OJK.'
  },
  museumItems: [
    { nomor: 1, nama: 'Prospektus', fungsi: 'Buku dokumen keterbukaan informasi profil dan keuangan perusahaan sebelum sahamnya ditawarkan ke publik.' },
    { nomor: 2, nama: 'Binokular', fungsi: 'Teropong pemantau yang digunakan para pialang untuk mengamati papan kurs harga di lantai bursa tempo dulu.' },
    { nomor: 3, nama: 'Kertas Saham', fungsi: 'Warkat fisik sertifikat bukti kepemilikan saham sebelum bursa beralih ke sistem digital tanpa warkat (scriptless).' },
    { nomor: 4, nama: 'Handheld Transceiver (HT)', fungsi: 'Perangkat radio komunikasi genggam antar pialang dan petugas lantai bursa untuk mengeksekusi pesanan secara cepat.' }
  ],
  produkPasarModal: [
    { nomor: 1, nama: 'Saham', definisi: 'Bukti kepemilikan modal atau bagian kepemilikan dalam suatu perusahaan perseroan terbatas.' },
    { nomor: 2, nama: 'Obligasi (Surat Utang)', definisi: 'Surat berharga pengakuan utang berjangka dari emiten kepada pemodal dengan janji imbalan kupon/bunga tetap.' },
    { nomor: 3, nama: 'Reksa Dana', definisi: 'Wadah untuk menghimpun dana dari masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh Manajer Investasi.' }
  ],
  diskusiKritis: [
    {
      topik: 'Keuntungan Investasi: Capital Gain & Dividen',
      penjelasan: 'Keuntungan dari kenaikan harga jual saham di atas harga belinya disebut Capital Gain. Sedangkan pembagian laba bersih perusahaan kepada pemegang saham disebut Dividen.'
    },
    {
      topik: 'Prinsip Risiko: Kalo Untungnya Besar, Risikonya Juga Besar',
      penjelasan: 'Hukum dasar pasar modal (High Risk, High Return). Potensi hasil tinggi selalu diimbangi dengan risiko fluktuasi nilai yang sebanding.'
    },
    {
      topik: 'Kenapa Saham Tidak Dibilang Judi?',
      penjelasan: 'Saham bukan judi karena memiliki bisnis riil (pabrik, produk, karyawan), dianalisis dengan data keuangan objektif, dilindungi kepastian hukum SRO & OJK, serta memberikan hak kepemilikan perusahaan secara nyata.'
    },
    {
      topik: 'Kalau Perusahaan Obligasinya Bangkrut Bagaimana?',
      penjelasan: 'Pemegang obligasi berstatus sebagai kreditur (pemberi utang). Jika perusahaan bangkrut/dilikuidasi, pemegang obligasi memiliki hak klaim pengembalian aset yang lebih tinggi dan didahulukan dibanding pemegang saham.'
    },
    {
      topik: 'Legalitas Platform Investasi',
      penjelasan: 'Sebelum mulai investasi lewat aplikasi (seperti Bibit, sekuritas, dll.), wajib memeriksa legalitasnya di website resmi OJK agar terhindar dari skema investasi bodong ilegal.'
    },
    {
      topik: 'Pasar Modal Itu Dinamis',
      penjelasan: 'Pergerakan harga efek berlangsung dinamis setiap detik sesi bursa, dipengaruhi sentimen ekonomi, permintaan-penawaran, dan performa keuangan emiten.'
    },
    {
      topik: 'Kode Saham Perusahaan (Ticker Symbol)',
      penjelasan: 'Setiap perusahaan terbuka memiliki kode 4 huruf di bursa, contohnya Indomie di bawah naungan PT Indofood Sukses Makmur Tbk dengan kode saham INDF (serta anak usahanya ICBP).'
    },
    {
      topik: 'Beda Pasar Indonesia vs Pasar Eropa',
      penjelasan: 'Bursa Indonesia memakai mata uang Rupiah (IDR). Jika berinvestasi dengan Rupiah di pasar Eropa/Global, dana akan dikonversi ke Valas (seperti Dollar/Euro) sehingga terdapat faktor risiko fluktuasi kurs mata uang.'
    },
    {
      topik: 'Menanggapi Perbedaan Dividen Antar Perusahaan',
      penjelasan: 'Jika tertarik pada beberapa perusahaan dengan dividen berbeda, strategi yang tepat adalah diversifikasi portofolio: menyeimbangkan antara saham dividen stabil untuk arus kas rutin dan saham bertumbuh untuk potensi capital gain.'
    }
  ],
  foundationalMilestones: [
    {
      year: '1912',
      period: 'Era Batavia',
      milestone: 'Pendirian Bursa Efek Pertama',
      details: 'Pasar modal pertama didirikan di Batavia untuk memperdagangkan komoditas perkebunan dan surat berharga kolonial.'
    },
    {
      year: '1977',
      period: 'Era Reaktivasi',
      milestone: 'Pengaktifan Kembali Pasar Modal',
      details: 'Bursa diaktifkan kembali oleh pemerintah dengan PT Semen Cibinong Tbk sebagai emiten pencatatan perdana.'
    },
    {
      year: '2007',
      period: 'Era Integrasi',
      milestone: 'Merger BEJ & BES Menjadi BEI',
      details: 'Penggabungan Bursa Efek Jakarta dan Surabaya melahirkan PT Bursa Efek Indonesia sebagai bursa tunggal nasional.'
    },
    {
      year: 'Kini',
      period: 'Era Digital SRO',
      milestone: 'Digitalisasi Tanpa Warkat',
      details: 'Perdagangan terintegrasi antara BEI (pasar), KPEI (kasir), dan KSEI (gudang) di bawah pengawasan OJK.'
    }
  ],
  sroArchitecture: [
    {
      code: 'BEI',
      fullTitle: 'PT Bursa Efek Indonesia (Pasar)',
      roleDefinition: 'Penyelenggara Perdagangan Efek',
      legalMandate: 'UU Pasar Modal',
      keyFunctions: [
        'Menyediakan infrastruktur perdagangan efek terkomputerisasi.',
        'Mengawasi keterbukaan informasi emiten dan aktivitas transaksi wajar.',
        'Mengedukasi masyarakat mengenai cara jual beli saham yang benar.'
      ],
      deliverableObservation: 'Diamati langsung di Main Trading Hall dan layar telemetri bursa.'
    },
    {
      code: 'KPEI',
      nama: 'Kliring Penjaminan Efek Indonesia',
      fullTitle: 'PT Kliring Penjaminan Efek Indonesia (Kasir)',
      roleDefinition: 'Penjaminan & Penyelesaian Transaksi Bursa',
      legalMandate: 'UU Pasar Modal',
      keyFunctions: [
        'Bertindak sebagai kasir bursa model yang menghitung hak dan kewajiban.',
        'Menjamin transaksi Delivery versus Payment (DvP).',
        'Mengelola dana jaminan jika terjadi gagal bayar/serah.'
      ],
      deliverableObservation: 'Dipelajari dalam mekanisme kliring transaksi bursa teratur.'
    },
    {
      code: 'KSEI',
      nama: 'Kustodian Sentral Efek Indonesia',
      fullTitle: 'PT Kustodian Sentral Efek Indonesia (Gudang)',
      roleDefinition: 'Kustodian & Penitipan Efek Sentral',
      legalMandate: 'UU Pasar Modal',
      keyFunctions: [
        'Bertindak sebagai gudang bursa model tempat penyimpanan portofolio efek.',
        'Menatausahakan pembukuan efek digital tanpa warkat (scriptless).',
        'Menerbitkan nomor Single Investor Identification (SID) resmi bagi pemodal.'
      ],
      deliverableObservation: 'Dipahami sebagai basis kepemilikan aset efek yang aman.'
    }
  ],
  verifiedMetrics: [
    { metric: '920+', label: 'Perusahaan Tercatat (Emiten)', source: 'Statistik Resmi BEI' },
    { metric: '13,5 Jt', label: 'Investor Terdaftar (SID)', source: 'Kustodian Sentral Efek Indonesia' },
    { metric: 'Rp 11,2 T', label: 'Rerata Transaksi Harian', source: 'Laporan Likuiditas BEI' },
    { metric: '3 Lembaga', label: 'Pilar SRO (BEI-KPEI-KSEI)', source: 'Diawasi Langsung oleh OJK' }
  ]
};

export const itineraryProtocol = [
  {
    step: '01',
    timeWindow: '07:30 - 08:30 WIB',
    sessionName: 'Kedatangan di SCBD & Pemeriksaan Keamanan',
    venue: 'Lobby Gedung Bursa Efek Indonesia Tower 1, SCBD Jakarta',
    category: 'CHECK-IN & REGISTRASI',
    curriculumObjective: 'Mengenal lokasi pusat finansial nasional di SCBD dan protokol pengamanan objek vital.',
    logNotes: 'Rombongan siswa tiba di kawasan SCBD Jakarta, melalui pemeriksaan keamanan gedung, dan menerima ID card tamu sebelum memulai rangkaian kunjungan.'
  },
  {
    step: '02',
    timeWindow: '08:30 - 09:15 WIB',
    sessionName: 'Tur Museum BEI: Mengamati 4 Benda Bersejarah',
    venue: 'Museum Sejarah & Galeri Edukasi BEI Lantai Dasar',
    category: 'KOLEKSI HISTORIS',
    curriculumObjective: 'Menelusuri sejarah pasar modal dari era manual hingga era modern.',
    logNotes: 'Kunjungan dimulai dengan melihat benda-benda bersejarah lantai bursa tempo dulu: 1. Prospektus perusahaan, 2. Binokular (teropong pemantau papan kurs), 3. Kertas Saham (warkat fisik), dan 4. Handheld Transceiver (HT pialang).'
  },
  {
    step: '03',
    timeWindow: '09:15 - 10:15 WIB',
    sessionName: 'Edukasi 3 Lembaga Bursa Model & Pengawasan OJK',
    venue: 'Auditorium Utama BEI (Ruang Bromo)',
    category: 'STRUKTUR KELEMBAGAAN',
    curriculumObjective: 'Memahami pembagian peran tiga lembaga bursa model dan regulator keuangan.',
    logNotes: 'Pemaparan analogi 3 lembaga bursa: 1. Bursa Efek Indonesia (Pasar), 2. KPEI (Kasir di bursa model yang menjamin kliring), dan 3. KSEI (Gudang nya bursa model yang menyimpan efek). Semuanya diawasi ketat oleh OJK.'
  },
  {
    step: '04',
    timeWindow: '10:15 - 11:00 WIB',
    sessionName: 'Pengenalan Produk & Cara Jual-Beli Efek',
    venue: 'Auditorium Utama & Galeri Investasi BEI',
    category: 'PRODUK & TEKNOLOGI',
    curriculumObjective: 'Membedakan produk pasar modal dan cara berinvestasi yang legal.',
    logNotes: 'Mempelajari 3 produk utama pasar modal: Saham, Obligasi (Surat Utang), dan Reksa Dana. Siswa diajarkan cara jual beli, cara berinvestasi melalui sekuritas atau aplikasi mitra seperti Bibit yang wajib terdaftar dan diawasi OJK.'
  },
  {
    step: '05',
    timeWindow: '11:00 - 12:00 WIB',
    sessionName: 'Sesi Diskusi Finansial & Tanya Jawab Kritis',
    venue: 'Main Trading Hall & Balcony Area Lantai 2',
    category: 'DIALOG KRITIS & PASAR',
    curriculumObjective: 'Menjawab pertanyaan esensial seputar risiko, dividen, dan dinamika pasar modal.',
    logNotes: 'Membahas konsep Capital Gain dan Dividen, prinsip "kalo untungnya besar resikonya juga besar", kenapa saham bukan judi, status hak pemegang obligasi jika perusahaan bangkrut, dinamika harga bursa, kode saham (seperti INDF untuk Indomie), bursa Indonesia (Rupiah) vs pasar Eropa (Valas/Dollar), dan cara menyikapi dividen yang berbeda-beda.'
  },
  {
    step: '06',
    timeWindow: '12:00 - 12:30 WIB',
    sessionName: 'Verifikasi Legalitas Investasi & Penutupan',
    venue: 'Podium Utama Lonceng Perdagangan BEI',
    category: 'PENUTUPAN & DOKUMENTASI',
    curriculumObjective: 'Menegaskan kewaspadaan investasi legal vs ilegal serta foto bersama delegasi.',
    logNotes: 'Pemberian kesimpulan akhir: sebelum investasi harus tahu legal dan ilegal (pastikan diawasi OJK). Dilanjutkan penyerahan plakat apresiasi dan foto bersama di podium bursa.'
  }
];

export const documentaryPlates = [
  {
    plateId: 'PLT-01',
    title: 'Gedung Bursa Efek Indonesia (Tower 1 SCBD Jakarta)',
    category: 'Fasilitas & Infrastruktur',
    recordedAt: '07:45 WIB',
    focalPoint: 'Gedung Pusat Pasar Modal di SCBD',
    sourceUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Kawasan Sudirman Central Business District (SCBD) Jakarta tempat beroperasinya PT Bursa Efek Indonesia.',
    significance: 'Lokasi kunjungan industri siswa kelas XI.'
  },
  {
    plateId: 'PLT-02',
    title: 'Monumen Banteng Wulung di Selasar BEI',
    category: 'Fasilitas & Infrastruktur',
    recordedAt: '08:10 WIB',
    focalPoint: 'Simbol Optimisme Pasar (Bull Market)',
    sourceUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Patung banteng perunggu di pelataran BEI sebagai lambang kekuatan ekonomi dan dinamika pasar modal.',
    significance: 'Ikon keterkenalan bursa efek nasional.'
  },
  {
    plateId: 'PLT-03',
    title: 'Museum BEI: Koleksi 4 Benda Bersejarah',
    category: 'Edukasi & Sejarah',
    recordedAt: '08:35 WIB',
    focalPoint: 'Prospektus, Binokular, Kertas Saham, HT',
    sourceUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Pengamatan benda bersejarah lantai bursa zaman dulu: 1. Prospektus, 2. Binokular, 3. Kertas Saham warkat, 4. Handheld Transceiver (HT pialang).',
    significance: 'Bukti fisik evolusi perdagangan saham dari masa ke masa.'
  },
  {
    plateId: 'PLT-04',
    title: 'Penjelasan 3 Lembaga Bursa Model & Pengawasan OJK',
    category: 'Edukasi & Sejarah',
    recordedAt: '09:20 WIB',
    focalPoint: 'Struktur BEI (Pasar), KPEI (Kasir), KSEI (Gudang)',
    sourceUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Sesi di auditorium memahami fungsi BEI sebagai pasar, KPEI sebagai kasir penjamin kliring, dan KSEI sebagai gudang penyimpanan efek, seluruhnya diawasi OJK.',
    significance: 'Pemahaman struktur kelembagaan resmi pasar modal.'
  },
  {
    plateId: 'PLT-05',
    title: 'Produk Pasar Modal: Saham, Obligasi, Reksa Dana',
    category: 'Edukasi & Sejarah',
    recordedAt: '09:50 WIB',
    focalPoint: 'Klasifikasi Tiga Instrumen Keuangan',
    sourceUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Materi mendalam tentang bukti kepemilikan modal (Saham), surat pengakuan utang kupon tetap (Obligasi), dan wadah dana kelolaan (Reksa Dana).',
    significance: 'Instrumen utama yang diperdagangkan di bursa.'
  },
  {
    plateId: 'PLT-06',
    title: 'Latihan Cara Jual-Beli & Pengenalan Aplikasi Legal',
    category: 'Edukasi & Sejarah',
    recordedAt: '10:20 WIB',
    focalPoint: 'Edukasi Investasi via Sekuritas & Bibit',
    sourceUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Diajarkan mekanisme order beli/jual dan cara memulai investasi melalui platform resmi yang wajib terdaftar dan diawasi OJK.',
    significance: 'Praktek praktis berinvestasi saham untuk pemula.'
  },
  {
    plateId: 'PLT-07',
    title: 'Observasi Telemetri Ticker & Dinamika Pasar',
    category: 'Fasilitas & Infrastruktur',
    recordedAt: '10:45 WIB',
    focalPoint: 'Pasar Modal Itu Dinamis',
    sourceUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Menyaksikan harga bergerak dinamis mengikuti transaksi riil serta mengenal kode saham perusahaan (seperti INDF untuk produk Indomie).',
    significance: 'Pemahaman sifat pasar saham yang selalu bergerak.'
  },
  {
    plateId: 'PLT-08',
    title: 'Diskusi Kritis: Kenapa Saham Bukan Judi',
    category: 'Dokumentasi Siswa',
    recordedAt: '11:15 WIB',
    focalPoint: 'Kepemilikan Bisnis Riil & Perlindungan Hukum',
    sourceUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Sesi tanya jawab: saham bukan judi karena didasarkan kepemilikan bisnis nyata, kinerja keuangan, dan regulasi ketat OJK.',
    significance: 'Meluruskan persepsi keliru masyarakat tentang pasar saham.'
  },
  {
    plateId: 'PLT-09',
    title: 'Tanya Jawab: Jika Perusahaan Obligasi Bangkrut',
    category: 'Dokumentasi Siswa',
    recordedAt: '11:35 WIB',
    focalPoint: 'Hak Tagih Kreditur & Likuidasi',
    sourceUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Penjelasan bahwa pemegang obligasi berstatus kreditur yang diprioritaskan pelunasan hak asetnya dibanding pemegang saham jika emiten pailit.',
    significance: 'Mitigasi risiko instrumen surat utang.'
  },
  {
    plateId: 'PLT-10',
    title: 'Perbedaan Pasar Indonesia (IDR) vs Pasar Eropa (Valas)',
    category: 'Dokumentasi Siswa',
    recordedAt: '11:50 WIB',
    focalPoint: 'Mata Uang & Konversi Valuta Asing',
    sourceUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Indonesia memakai mata uang Rupiah; investasi di pasar Eropa dengan Rupiah akan dikonversi menjadi Dollar/Valas dengan risiko selisih kurs.',
    significance: 'Wawasan perbandingan bursa lokal dan global.'
  },
  {
    plateId: 'PLT-11',
    title: 'Prinsip Capital Gain, Dividen & Risiko Tinggi',
    category: 'Dokumentasi Siswa',
    recordedAt: '12:10 WIB',
    focalPoint: 'Kalo Untung Besar, Risiko Juga Besar',
    sourceUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Mengetahui dua sumber keuntungan (capital gain dan dividen) serta cara menyikapi dividen yang berbeda-beda melalui diversifikasi portofolio.',
    significance: 'Fondasi manajemen risiko investor.'
  },
  {
    plateId: 'PLT-12',
    title: 'Serah Terima Plakat & Penutupan di Podium BEI',
    category: 'Dokumentasi Siswa',
    recordedAt: '12:30 WIB',
    focalPoint: 'Penutupan Kunjungan Industri SCBD',
    sourceUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    curatorialNotes: 'Penyerahan plakat apresiasi dari guru pembimbing kepada BEI dan penegasan pentingnya berinvestasi hanya di platform berizin OJK.',
    significance: 'Penutupan resmi kunjungan industri Kelas XI.'
  }
];

export const vlogConsoleSpec = {
  requiredDurationSec: 90,
  formattedTimecode: '01:30',
  title: 'Log Video Vlog Resmi Kunjungan Industri BEI SCBD',
  authorRole: 'Dokumentasi Siswa Kelas XI // Verifikasi Penugasan Mandiri',
  synopsis: 'Dokumentasi terstruktur berdurasi 90 detik yang merangkum poin inti kunjungan: tiba di SCBD, mengamati 4 benda bersejarah di museum, penjelasan 3 lembaga bursa model (BEI pasar, KPEI kasir, KSEI gudang) diawasi OJK, produk saham/obligasi/reksadana, dan diskusi kritis seputar saham vs judi.',
  timecodeChapters: [
    { start: 0, end: 15, code: '00:00 - 00:15', title: 'Tiba di SCBD & Registrasi', summary: 'Kedatangan rombongan siswa di Gedung BEI Tower 1 SCBD Jakarta dan security check.' },
    { start: 15, end: 35, code: '00:15 - 00:35', title: 'Museum BEI: 4 Benda Bersejarah', summary: 'Melihat Prospektus, Binokular, Kertas Saham warkat, dan Handheld Transceiver (HT pialang).' },
    { start: 35, end: 55, code: '00:35 - 00:55', title: '3 Lembaga Bursa Model & Pengawasan OJK', summary: 'Paham fungsi BEI (pasar), KPEI (kasir), dan KSEI (gudang) di bawah regulasi OJK.' },
    { start: 55, end: 75, code: '00:55 - 01:15', title: 'Produk Saham, Obligasi & Cara Investasi', summary: 'Belajar instrumen saham, obligasi (surat utang), reksadana, dan aplikasi legal (Bibit/sekuritas).' },
    { start: 75, end: 90, code: '01:15 - 01:30', title: 'Diskusi Kritis: Saham vs Judi & Penutupan', summary: 'Membahas kenapa saham bukan judi, capital gain, dividen, dan penyerahan plakat sekolah.' }
  ]
};

export const academicSynthesis = {
  abstract: 'Kunjungan industri siswa Kelas XI ke Bursa Efek Indonesia (SCBD Jakarta) memberikan pemahaman konkret mengenai pasar modal: mengenal 4 benda bersejarah museum (prospektus, binokular, kertas saham, HT pialang), memahami struktur 3 lembaga bursa model (BEI sebagai pasar, KPEI sebagai kasir, KSEI sebagai gudang yang diawasi OJK), membedakan produk saham, obligasi (surat utang), dan reksadana, serta menyadari pentingnya memastikan legalitas izin OJK sebelum berinvestasi.',
  fourCorePillars: [
    {
      code: 'POIN-01',
      pillar: 'Tiga Lembaga Bursa Model (Diawasi OJK)',
      finding: 'Bursa Efek Indonesia (BEI) bertindak sebagai Pasar, KPEI sebagai Kasir yang mengurus penjaminan kliring transaksi, dan KSEI sebagai Gudang tempat penyimpanan efek dan pencatatan SID investor, seluruhnya diawasi ketat oleh OJK.'
    },
    {
      code: 'POIN-02',
      pillar: 'Koleksi Museum & 4 Benda Bersejarah',
      finding: 'Kunjungan dimulai dengan melihat Prospektus perusahaan, Binokular teropong pemantau bursa kuno, Kertas Saham warkat fisik sebelum era digital, dan Handheld Transceiver (HT) untuk komunikasi cepat pialang.'
    },
    {
      code: 'POIN-03',
      pillar: 'Produk Pasar Modal & Cara Memulai Investasi',
      finding: 'Mengenal 3 produk utama: Saham (kepemilikan perusahaan), Obligasi (surat utang kupon berkala), dan Reksa Dana (dana terkelola). Diajarkan cara jual beli dan investasi melalui sekuritas atau aplikasi mitra resmi (seperti Bibit).'
    },
    {
      code: 'POIN-04',
      pillar: 'Diskusi Kritis: Keuntungan, Risiko & Legalitas OJK',
      finding: 'Keuntungan kenaikan harga disebut Capital Gain dan bagi laba disebut Dividen. Kalo untungnya besar, risikonya juga besar. Saham bukan judi karena ada bisnis riil dan legalitas hukum OJK. Jika perusahaan obligasi bangkrut, hak kreditur didahulukan dibanding pemegang saham. Wajib pastikan legalitas diawasi OJK sebelum investasi.'
    }
  ],
  defaultStudentLog: {
    studentName: 'Ahmad Faiz Al-Farizi',
    studentId: '0078129045',
    schoolClass: 'XI MIPA 2 / SMK',
    advisoryTeacher: 'Dra. Sri Wahyuni, M.Pd.',
    submissionDate: '21 November 2026',
    evaluatorNotes: 'Portofolio lengkap memuat fakta nyata kunjungan SCBD: museum 4 benda bersejarah, 3 lembaga bursa model (BEI-KPEI-KSEI), produk saham/obligasi/reksadana, dan diskusi kritis.',
    personalTakeaway: 'Kunjungan ke BEI SCBD memberikan pemahaman langsung: mengamati 4 benda bersejarah di museum (prospektus, binokular, kertas saham, HT), paham analogi 3 lembaga (BEI pasar, KPEI kasir, KSEI gudang diawasi OJK), serta membedakan produk saham, obligasi (surat utang), dan reksadana. Saya jadi tahu kenapa saham bukan judi karena didasari kepemilikan bisnis riil, paham kode saham seperti INDF, dan tahu pentingnya memastikan aplikasi investasi terdaftar resmi di OJK.',
    financialCommitment: 'Hanya berinvestasi pada aplikasi atau sekuritas yang resmi diawasi OJK (seperti Bibit atau sekuritas resmi), selalu ingat prinsip "kalo untung besar resikonya juga besar", dan mulai belajar menyisihkan uang saku untuk instrumen investasi terpercaya.'
  }
};

export const terminalQuizQuestions = [
  {
    id: 'Q-01',
    question: 'Dalam penjelasan analogi tiga lembaga bursa model saat kunjungan di SCBD, lembaga yang bertindak sebagai "Gudang" tempat penyimpanan efek adalah...',
    options: ['Bursa Efek Indonesia (BEI)', 'Kliring Penjaminan Efek Indonesia (KPEI)', 'Kustodian Sentral Efek Indonesia (KSEI)', 'Otoritas Jasa Keuangan (OJK)'],
    correctIndex: 2,
    technicalExplanation: 'Dalam analogi bursa model: BEI adalah Pasar, KPEI adalah Kasir penjamin transaksi, dan KSEI adalah Gudang tempat penyimpanan seluruh portofolio efek terpusat.'
  },
  {
    id: 'Q-02',
    question: 'Benda bersejarah di museum BEI yang digunakan para pialang untuk berkomunikasi langsung di lantai perdagangan tempo dulu adalah...',
    options: ['Prospektus', 'Binokular', 'Kertas Saham', 'Handheld Transceiver (HT)'],
    correctIndex: 3,
    technicalExplanation: 'Handheld Transceiver (HT) merupakan perangkat radio pialang lantai bursa tempo dulu untuk menyampaikan instruksi order jual/beli sebelum era komputasi modern.'
  },
  {
    id: 'Q-03',
    question: 'Keuntungan yang diperoleh investor dari selisih kenaikan harga jual saham di atas harga belinya disebut...',
    options: ['Dividen', 'Capital Gain', 'Bunga Obligasi', 'Kupon Reksa Dana'],
    correctIndex: 1,
    technicalExplanation: 'Keuntungan dari selisih positif harga jual dibanding harga beli disebut Capital Gain, sedangkan pembagian laba perusahaan disebut Dividen.'
  },
  {
    id: 'Q-04',
    question: 'Sebelum berinvestasi melalui platform online atau sekuritas (seperti Bibit dll), hal utama yang wajib dipastikan adalah...',
    options: ['Menawarkan return keuntungan pasti di atas 50%', 'Memiliki kantor cabang di Eropa', 'Resmi terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)', 'Bisa bertransaksi tanpa memerlukan kode saham'],
    correctIndex: 2,
    technicalExplanation: 'Sebelum berinvestasi harus tahu legal dan ilegal; syarat mutlak platform investasi yang aman adalah terdaftar resmi dan diawasi oleh Otoritas Jasa Keuangan (OJK).'
  },
  {
    id: 'Q-05',
    question: 'Mengapa investasi saham tidak dapat disamakan dengan perjudian?',
    options: [
      'Karena saham selalu menghasilkan keuntungan tanpa risiko fluktuasi',
      'Karena saham merupakan bukti kepemilikan bisnis riil dengan aset, kinerja keuangan, dan legalitas resmi OJK',
      'Karena harga saham di bursa tidak pernah mengalami penurunan',
      'Karena saham hanya boleh dibeli menggunakan mata uang asing'
    ],
    correctIndex: 1,
    technicalExplanation: 'Saham adalah bukti penyertaan modal kepemilikan bisnis riil yang memiliki operasional nyata, laporan keuangan terdaftar, dan perlindungan hukum di bawah OJK, bukan spekulasi kosong.'
  }
];
