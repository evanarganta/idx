import React, { useState } from 'react';
import Dock from './components/Dock';
import HomeView from './components/HomeView';
import ProfileBEI from './components/ProfileBEI';
import RangkaianKegiatan from './components/RangkaianKegiatan';
import GaleriFoto from './components/GaleriFoto';
import VideoVlog from './components/VideoVlog';
import KesimpulanRefleksi from './components/KesimpulanRefleksi';
import idxLogo from './assets/logo.svg';
import {
  HomeIcon,
  BuildingIcon,
  CalendarIcon,
  ImageIcon,
  VideoIcon,
  FileTextIcon
} from './components/Icons';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dockItems = [
    {
      icon: <HomeIcon size={16} />,
      label: 'Beranda',
      active: currentPage === 'home',
      onClick: () => navigateTo('home'),
      menu: [
        { label: 'Buka Beranda', onClick: () => navigateTo('home') },
        { separator: true },
        { label: 'Data Peneliti Siswa', onClick: () => navigateTo('home') }
      ]
    },
    {
      icon: <BuildingIcon size={16} />,
      label: 'Profil',
      active: currentPage === 'profil',
      onClick: () => navigateTo('profil'),
      menu: [
        { label: 'Struktur Kelembagaan SRO', onClick: () => navigateTo('profil') },
        { label: 'Sejarah Pasar Modal (1912 - Kini)', onClick: () => navigateTo('profil') }
      ]
    },
    {
      icon: <CalendarIcon size={16} />,
      label: 'Rangkaian',
      active: currentPage === 'kegiatan',
      onClick: () => navigateTo('kegiatan'),
      menu: [
        { label: 'Jadwal 6 Sesi Observasi', onClick: () => navigateTo('kegiatan') }
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
        { label: 'Putar Video Kunjungan (01:30)', onClick: () => navigateTo('vlog') }
      ]
    },
    {
      icon: <FileTextIcon size={16} />,
      label: 'Refleksi',
      active: currentPage === 'refleksi',
      onClick: () => navigateTo('refleksi'),
      menu: [
        { label: 'Lembar Refleksi Siswa', onClick: () => navigateTo('refleksi') },
        { label: 'Kuis Evaluasi 5 Soal', onClick: () => navigateTo('refleksi') }
      ]
    }
  ];

  return (
    <div className={`app-root has-top-dock${currentPage === 'home' ? ' is-home-page' : ''}`}>
      <main className="main-content">
        {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
        {currentPage === 'profil' && <ProfileBEI />}
        {currentPage === 'kegiatan' && <RangkaianKegiatan />}
        {currentPage === 'galeri' && <GaleriFoto />}
        {currentPage === 'vlog' && <VideoVlog />}
        {currentPage === 'refleksi' && <KesimpulanRefleksi />}
      </main>

      <div className="dock-fixed-wrapper">
        <Dock
          logo={
            <img
              src={idxLogo}
              alt="Bursa Efek Indonesia"
              style={{
                height: 20,
                width: 'auto',
                display: 'block'
              }}
            />
          }
          items={dockItems}
          position="top"
          theme="dark"
          baseItemSize={38}
          magnification={54}
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
