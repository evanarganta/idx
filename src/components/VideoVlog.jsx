import React, { useState, useEffect, useRef } from 'react';
import { vlogConsoleSpec } from '../data/siteData';
import { PlayIcon, PauseIcon, RotateCcwIcon } from './Icons';

export default function VideoVlog() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSec, setCurrentSec] = useState(0);
  const [customUrl, setCustomUrl] = useState('');
  const [showInput, setShowInput] = useState(false);

  const totalSec = vlogConsoleSpec.requiredDurationSec;
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSec((prev) => {
          if (prev >= totalSec) {
            setIsPlaying(false);
            return totalSec;
          }
          return Math.min(prev + 0.5, totalSec);
        });
      }, 500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSec]);

  const activeChapter = vlogConsoleSpec.timecodeChapters.find(
    (c) => currentSec >= c.start && currentSec <= c.end
  ) || vlogConsoleSpec.timecodeChapters[vlogConsoleSpec.timecodeChapters.length - 1];

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleToggle = () => {
    if (currentSec >= totalSec) {
      setCurrentSec(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const jumpTo = (start) => {
    setCurrentSec(start);
    setIsPlaying(true);
  };

  const getChapterImage = (chap) => {
    switch (chap.start) {
      case 0:
        return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
      case 15:
        return 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80';
      case 35:
        return 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80';
      case 55:
        return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80';
      case 75:
        return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
      default:
        return 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80';
    }
  };

  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1 className="page-heading">Video vlog kunjungan (90 detik)</h1>
        <p className="page-lead">
          Rangkuman audio visual dengan durasi resmi 90 detik (01:30) mencakup kedatangan, tur museum, edukasi dan observasi trading floor.
        </p>
      </div>

      <div className="vlog-container">
        <div className="vlog-top-bar">
          <span className="vlog-duration-tag font-mono">Durasi: 01:30 (90 detik)</span>
          <button
            type="button"
            onClick={() => setShowInput(!showInput)}
            className="text-btn"
          >
            {showInput ? 'Tutup input' : 'Tautkan video sendiri'}
          </button>
        </div>

        {showInput && (
          <div className="custom-url-row">
            <input
              type="text"
              placeholder="Tautan video YouTube embed atau Google Drive"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="text-input"
            />
          </div>
        )}

        <div className="video-frame">
          {customUrl ? (
            <iframe
              src={customUrl}
              title="Video kunjungan"
              className="video-iframe"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="video-player-screen" onClick={handleToggle}>
              <img
                src={getChapterImage(activeChapter)}
                alt={activeChapter.title}
                className="video-screen-bg"
              />
              <div className="video-scrim"></div>

              {!isPlaying && (
                <div className="center-play-button">
                  <PlayIcon size={20} className="text-primary" />
                </div>
              )}

              <div className="video-chapter-badge">
                <span className="font-mono text-xs">{activeChapter.code}</span>
                <span className="chapter-title-text">{activeChapter.title}</span>
              </div>

              <div className="video-timecode font-mono">
                {formatTime(currentSec)} / {vlogConsoleSpec.formattedTimecode}
              </div>
            </div>
          )}
        </div>

        <div className="video-controls-bar">
          <button type="button" onClick={handleToggle} className="btn-icon" aria-label={isPlaying ? 'Jeda' : 'Putar'}>
            {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentSec(0);
              setIsPlaying(true);
            }}
            className="btn-icon"
            aria-label="Mulai ulang"
          >
            <RotateCcwIcon size={15} />
          </button>

          <input
            type="range"
            min="0"
            max={totalSec}
            step="0.5"
            value={currentSec}
            onChange={(e) => setCurrentSec(parseFloat(e.target.value))}
            className="time-scrubber"
            aria-label="Seek video"
          />

          <span className="time-readout font-mono">
            {formatTime(currentSec)} / {vlogConsoleSpec.formattedTimecode}
          </span>
        </div>

        <div className="chapters-list">
          <div className="chapters-title">Segmen video</div>
          <div className="chapters-stack">
            {vlogConsoleSpec.timecodeChapters.map((chap) => (
              <button
                key={chap.start}
                type="button"
                onClick={() => jumpTo(chap.start)}
                className={`chapter-row ${activeChapter.start === chap.start ? 'active' : ''}`}
              >
                <span className="chapter-time font-mono">{chap.code}</span>
                <span className="chapter-name">{chap.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
