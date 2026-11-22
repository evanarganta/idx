import React, { useRef, useState, useEffect, useCallback } from 'react';
import vlogVideo from '../../assets/vlog.mp4';
import {
  PlayIcon,
  PauseIcon,
  VolumeHighIcon,
  VolumeMuteIcon,
  MaximizeIcon,
  MinimizeIcon,
  RotateCcwIcon,
  RotateCwIcon
} from '../Icons';

function formatTime(sec) {
  if (isNaN(sec) || sec < 0) return '00:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function Vlog({ onControlsVisibilityChange }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const scrubberRef = useRef(null);
  const hideTimerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverRatio, setHoverRatio] = useState(0);
  const [centerFlash, setCenterFlash] = useState(null);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    onControlsVisibilityChange?.(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
        onControlsVisibilityChange?.(false);
      }
    }, 2600);
  }, [onControlsVisibilityChange]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
      setCenterFlash({ type: 'play', id: Date.now() });
    } else {
      v.pause();
      setIsPlaying(false);
      setCenterFlash({ type: 'pause', id: Date.now() });
    }
    resetHideTimer();
  }, [resetHideTimer]);

  const seekBy = useCallback((delta) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + delta));
    resetHideTimer();
  }, [resetHideTimer]);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    resetHideTimer();
  }, [resetHideTimer]);

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    setVolume(val);
    if (val === 0) {
      v.muted = true;
      setIsMuted(true);
    } else if (v.muted) {
      v.muted = false;
      setIsMuted(false);
    }
    resetHideTimer();
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2];
    const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    if (videoRef.current) videoRef.current.playbackRate = next;
    setPlaybackRate(next);
    resetHideTimer();
  };

  const toggleFullscreen = useCallback(() => {
    const elem = containerRef.current;
    if (!elem) return;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
    resetHideTimer();
  }, [resetHideTimer]);

  const handleScrubberMove = (e) => {
    const rect = scrubberRef.current?.getBoundingClientRect();
    if (!rect || !duration) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverRatio(ratio);
    setHoverTime(ratio * duration);
  };

  const handleScrubberLeave = () => {
    setHoverTime(null);
  };

  const handleScrubberClick = (e) => {
    const rect = scrubberRef.current?.getBoundingClientRect();
    if (!rect || !duration || !videoRef.current) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * duration;
    resetHideTimer();
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        seekBy(-5);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        seekBy(5);
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        const v = videoRef.current;
        if (v) {
          const next = Math.min(1, v.volume + 0.1);
          v.volume = next;
          setVolume(next);
        }
        resetHideTimer();
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        const v = videoRef.current;
        if (v) {
          const next = Math.max(0, v.volume - 0.1);
          v.volume = next;
          setVolume(next);
        }
        resetHideTimer();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [togglePlay, seekBy, toggleFullscreen, toggleMute, resetHideTimer]);

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (v.buffered.length > 0) {
      setBuffered((v.buffered.end(v.buffered.length - 1) / (v.duration || 1)) * 100);
    }
  };

  const onLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setDuration(v.duration);
  };

  const onVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`vlog-root${!showControls && isPlaying ? ' is-idle' : ''}`}
      onMouseMove={resetHideTimer}
      onClick={resetHideTimer}
    >
      <div className="vlog-video-wrapper">
        <video
          ref={videoRef}
          className="vlog-video-player"
          src={vlogVideo}
          playsInline
          preload="metadata"
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={onVideoEnded}
          onClick={togglePlay}
          onDoubleClick={toggleFullscreen}
        />

        {centerFlash && (
          <div key={centerFlash.id} className="vlog-center-flash">
            {centerFlash.type === 'play' ? <PlayIcon size={32} /> : <PauseIcon size={32} />}
          </div>
        )}

        <div className={`vlog-bottom-hud${showControls ? ' is-visible' : ''}`}>
          <div
            ref={scrubberRef}
            className="vlog-scrubber-container"
            onClick={handleScrubberClick}
            onMouseMove={handleScrubberMove}
            onMouseLeave={handleScrubberLeave}
          >
            <div className="vlog-scrubber-track">
              <div
                className="vlog-scrubber-buffered"
                style={{ width: `${buffered}%` }}
              />
              <div
                className="vlog-scrubber-played"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="vlog-scrubber-thumb"
                style={{ left: `${progressPercent}%` }}
              />
            </div>
            {hoverTime !== null && (
              <div
                className="vlog-scrubber-tooltip"
                style={{ left: `${hoverRatio * 100}%` }}
              >
                {formatTime(hoverTime)}
              </div>
            )}
          </div>

          <div className="vlog-controls-row">
            <div className="vlog-controls-left">
              <button
                type="button"
                className="vlog-btn vlog-btn-play"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Jeda' : 'Putar'}
              >
                {isPlaying ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
              </button>

              <button
                type="button"
                className="vlog-btn"
                onClick={() => seekBy(-10)}
                aria-label="Mundur 10 detik"
                title="Mundur 10s"
              >
                <RotateCcwIcon size={16} />
              </button>

              <button
                type="button"
                className="vlog-btn"
                onClick={() => seekBy(10)}
                aria-label="Maju 10 detik"
                title="Maju 10s"
              >
                <RotateCwIcon size={16} />
              </button>

              <div className="vlog-volume-group">
                <button
                  type="button"
                  className="vlog-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeMuteIcon size={18} />
                  ) : (
                    <VolumeHighIcon size={18} />
                  )}
                </button>
                <input
                  type="range"
                  className="vlog-volume-slider"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume"
                />
              </div>

              <span className="vlog-time-readout">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="vlog-controls-right">
              <button
                type="button"
                className="vlog-speed-btn"
                onClick={cyclePlaybackRate}
                title="Kecepatan Putar"
              >
                {playbackRate}x
              </button>

              <button
                type="button"
                className="vlog-btn"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
                title={isFullscreen ? 'Keluar Fullscreen (F)' : 'Fullscreen (F)'}
              >
                {isFullscreen ? <MinimizeIcon size={18} /> : <MaximizeIcon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
