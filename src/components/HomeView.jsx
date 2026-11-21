import React from 'react';
import newHeroImg from '../assets/newhero.png';

export default function HomeView() {
  return (
    <div className="home-cinematic-wrapper">
      <section className="hero-cinematic-stage">
        <div className="hero-full-bg-layer" aria-hidden="true">
          <img
            src={newHeroImg}
            alt="Bursa Efek Indonesia"
            className="hero-full-bg-img"
          />
        </div>

        <div className="hero-center-content-plane">
          <h1 className="hero-main-title hero-centered-title">
            <span className="title-lead">BURSA EFEK INDONESIA</span>
            <span className="title-sub">INDONESIA STOCK EXCHANGE</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
