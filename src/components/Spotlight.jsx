'use client';

import React from 'react';
import '@/styles/Spotlight.css';

const Spotlight = () => {
  return (
    <section className="spotlight-section">
      <div className="related-links-tab">
        <span>Related Links</span>
      </div>
      
      <div className="container">
        <div className="spotlight-header">
          <div className="spotlight-badge">
            <span className="badge-text">SPOTLIGHT</span>
            <div className="badge-underline"></div>
          </div>
          <h2 className="spotlight-main-title">
            Where Dream Turns into Reality – Celebrating People, <br/> 
            Passion, and Progress at MIU
          </h2>
        </div>

        <div className="spotlight-grid">
          {/* Left Large Promo */}
          <div className="spotlight-card large-card">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Academics" 
              className="card-img" 
            />
            <div className="card-overlay">
              <h3>Academics</h3>
              <p>
                MIU organised an inspiring Youth Talk featuring the remarkable 
                Srikant Bolla—renowned public speaker, entrepreneur, 
                philanthropist, and CEO of Bolant Industries.
              </p>
            </div>
          </div>

          {/* Middle Speaker Portrait */}
          <div className="spotlight-card speaker-card">
            <img 
              src="https://images.unsplash.com/photo-1475721027181-e7751978255b?auto=format&fit=crop&q=80&w=800" 
              alt="Speaker" 
              className="card-img" 
            />
          </div>

          {/* Right Award/Event */}
          <div className="spotlight-card award-card">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
              alt="Award" 
              className="card-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
