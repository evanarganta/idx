export const institutionalProfile = {
  tigaLembagaModel: [
    {
      code: 'BEI',
      nama: 'Bursa Efek Indonesia',
      keterangan: 'Menyelenggarakan dan memfasilitasi perdagangan efek di pasar modal melalui sistem bursa yang teratur, transparan, dan efisien.'
    },
    {
      code: 'KPEI',
      nama: 'Kliring Penjaminan Efek Indonesia',
      keterangan: 'Menyelenggarakan layanan kliring dan penjaminan penyelesaian transaksi efek guna memastikan proses penyelesaian berjalan tertib, aman, dan terjamin.'
    },
    {
      code: 'KSEI',
      nama: 'Kustodian Sentral Efek Indonesia',
      keterangan: 'Menyelenggarakan layanan kliring dan penjaminan penyelesaian transaksi efek guna memastikan proses penyelesaian berjalan tertib, aman, dan terjamin.'
    }
  ],
  museumItems: [
    { nomor: 1, nama: 'Prospektus', fungsi: 'Buku dokumen keterbukaan informasi profil dan keuangan perusahaan sebelum sahamnya ditawarkan ke publik.' },
    { nomor: 2, nama: 'Binokular', fungsi: 'Teropong pemantau yang digunakan para pialang untuk mengamati papan kurs harga di lantai bursa tempo dulu.' },
    { nomor: 3, nama: 'Kertas Saham', fungsi: 'Warkat fisik sertifikat bukti kepemilikan saham sebelum bursa beralih ke sistem digital tanpa warkat (scriptless).' },
    { nomor: 4, nama: 'Handheld Transceiver (HT)', fungsi: 'Perangkat radio komunikasi genggam antar pialang dan petugas lantai bursa untuk eksekusi pesanan secara cepat.' }
  ],
  produkPasarModal: [
    { nomor: 1, nama: 'Saham', definisi: 'Bukti kepemilikan atas suatu perusahaan. Investor berpotensi memperoleh keuntungan dari kenaikan harga saham (capital gain) dan pembagian dividen.' },
    { nomor: 2, nama: 'Reksa Dana', definisi: 'Wadah untuk menghimpun dana dari investor yang kemudian dikelola oleh manajer investasi ke berbagai instrumen, seperti saham, obligasi, dan pasar uang.' },
    { nomor: 3, nama: 'ETF', definisi: 'Produk investasi berbentuk reksa dana yang diperdagangkan di bursa efek seperti saham. ETF biasanya mengikuti indeks atau kumpulan aset tertentu.' },
    { nomor: 4, nama: 'Obligasi', definisi: 'Surat utang yang diterbitkan oleh pemerintah atau perusahaan. Investor memperoleh pembayaran bunga atau kupon sesuai ketentuan dan pengembalian pokok sesuai jatuh tempo.' },
    { nomor: 5, nama: 'Waran', definisi: 'Hak untuk membeli saham perusahaan pada harga dan periode tertentu. Waran memiliki masa berlaku dan dapat menjadi tidak bernilai jika tidak digunakan sebelum kedaluwarsa.' },
    { nomor: 6, nama: 'Indeks Saham', definisi: 'Indikator yang menggambarkan pergerakan harga sekelompok saham. Contohnya IHSG, LQ45, dan IDX30. Indeks bukan saham yang dibeli secara langsung, tetapi dapat menjadi acuan produk investasi.' },
    { nomor: 7, nama: 'Derivatif Saham', definisi: 'Instrumen keuangan yang nilainya bergantung pada aset atau indeks acuan. Contohnya kontrak berjangka (futures) dan opsi (options). Produk ini memiliki risiko dan kompleksitas lebih tinggi.' }
  ]
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
