import React from 'react';
import newHeroImg from '../../assets/hero.webp';

export default function Beranda() {
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
            <span className="title-lead">Bursa Efek Indonesia</span>
            <span className="title-sub">Indonesia Stock Exchange</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
