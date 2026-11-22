import React, { useState, useEffect } from 'react';
import Dock from './components/Dock';
import Beranda from './components/pages/Beranda';
import Materi from './components/pages/Materi';
import Rangkaian from './components/pages/Rangkaian';
import Galeri from './components/pages/Galeri';
import Vlog from './components/pages/Vlog';
import Kesimpulan from './components/pages/Kesimpulan';
import Kuis from './components/pages/Kuis';
import idxLogo from './assets/logo.svg';
import {
  HomeIcon,
  BuildingIcon,
  CalendarIcon,
  ImageIcon,
  VideoIcon,
  FileTextIcon,
  PencilIcon
} from './components/Icons';
import './App.css';

const VALID_PAGES = ['beranda', 'materi', 'rangkaian', 'galeri', 'vlog', 'kesimpulan', 'kuis'];

function getPageFromPath() {
  const segment = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
  return VALID_PAGES.includes(segment) ? segment : 'beranda';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [vlogShowControls, setVlogShowControls] = useState(true);

  useEffect(() => {
    const onPopState = () => setCurrentPage(getPageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    const targetPath = pageId === 'beranda' ? '/' : `/${pageId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dockItems = [
    {
      icon: <HomeIcon size={16} />,
      label: 'Beranda',
      active: currentPage === 'beranda',
      onClick: () => navigateTo('beranda'),
      menu: [
        { label: 'Buka Beranda', onClick: () => navigateTo('beranda') },
        { separator: true },
        { label: 'Data Peneliti Siswa', onClick: () => navigateTo('beranda') }
      ]
    },
    {
      icon: <BuildingIcon size={16} />,
      label: 'Materi',
      active: currentPage === 'materi',
      onClick: () => navigateTo('materi'),
      menu: [
        { label: 'Struktur Kelembagaan SRO', onClick: () => navigateTo('materi') },
        { label: 'Sejarah Pasar Modal (1912 - Kini)', onClick: () => navigateTo('materi') }
      ]
    },
    {
      icon: <CalendarIcon size={16} />,
      label: 'Rangkaian',
      active: currentPage === 'rangkaian',
      onClick: () => navigateTo('rangkaian'),
      menu: [
        { label: 'Jadwal Kunjungan Industri', onClick: () => navigateTo('rangkaian') }
      ]
    },
    {
      icon: <ImageIcon size={16} />,
      label: 'Galeri',
      active: currentPage === 'galeri',
      onClick: () => navigateTo('galeri'),
      menu: [
        { label: 'Buka 12 Foto Dokumentasi', onClick: () => navigateTo('galeri') }
      ]
    },
    {
      icon: <VideoIcon size={16} />,
      label: 'Vlog',
      active: currentPage === 'vlog',
      onClick: () => navigateTo('vlog'),
      menu: [
        { label: 'Putar Video Vlog', onClick: () => navigateTo('vlog') }
      ]
    },
    {
      icon: <FileTextIcon size={16} />,
      label: 'Kesimpulan',
      active: currentPage === 'kesimpulan',
      onClick: () => navigateTo('kesimpulan'),
      menu: [
        { label: 'Rangkuman Materi Kunjungan', onClick: () => navigateTo('kesimpulan') }
      ]
    },
    {
      icon: <PencilIcon size={16} />,
      label: 'Kuis',
      active: currentPage === 'kuis',
      onClick: () => navigateTo('kuis'),
      menu: [
        { label: 'Kuis Evaluasi 5 Soal', onClick: () => navigateTo('kuis') }
      ]
    }
  ];

  return (
    <div className={`app-root has-top-dock${currentPage === 'beranda' ? ' is-home-page' : ''}${currentPage === 'rangkaian' ? ' is-rangkaian-page' : ''}${currentPage === 'galeri' ? ' is-galeri-page' : ''}${currentPage === 'vlog' ? ' is-vlog-page' : ''}`}>
      <main className="main-content">
        {currentPage === 'beranda' && <Beranda onNavigate={navigateTo} />}
        {currentPage === 'materi' && <Materi />}
        {currentPage === 'rangkaian' && <Rangkaian />}
        {currentPage === 'galeri' && <Galeri />}
        {currentPage === 'vlog' && <Vlog onControlsVisibilityChange={setVlogShowControls} />}
        {currentPage === 'kesimpulan' && <Kesimpulan />}
        {currentPage === 'kuis' && <Kuis />}
      </main>

      <div className={`dock-fixed-wrapper${currentPage === 'vlog' && !vlogShowControls ? ' dock-hidden' : ''}`}>
        <Dock
          logo={
            <img
              src={idxLogo}
              alt="Bursa Efek Indonesia"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              style={{ height: 20, width: 'auto', display: 'block' }}
            />
          }
          items={dockItems}
          position="top"
          theme="dark"
          baseItemSize={38}
          magnification={42}
          panelHeight={52}
          gap={6}
          distance={100}
          roundness={0.45}
          spring={{ mass: 0.08, stiffness: 200, damping: 14 }}
          bounce={true}
          showLabels={true}
          showIndicators={false}
          showBadges={false}
          accentColor="#ffffff"
          className="dock-global-bar"
        />
      </div>
    </div>
  );
}

export default App;
