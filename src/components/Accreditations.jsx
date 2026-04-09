'use client';

import React from 'react';
import '@/styles/Accreditations.css';

const recognitions = [
  "UGC Approved", 
  "NAAC A++ Graded",
  "NIRF Top 50", 
  "AICTE Approved", 
  "Bar Council of India", 
  "Pharmacy Council",
  "ICAR Accredited",
  "NCTE Approved"
];

const Accreditations = () => {
  return (
    <section className="accreditations-section">
      <div className="accreditation-header container">
        <h3 className="acc-title">Recognitions & Accreditations</h3>
        <p className="acc-desc">Trusted by top statutory bodies of India and the World.</p>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {recognitions.map((item, index) => (
            <div key={index} className="recognition-badge">
              <span className="badge-shield">🛡️</span>
              <span className="badge-text">{item}</span>
            </div>
          ))}
          {/* Duplicate for seamless infinite scroll */}
          {recognitions.map((item, index) => (
            <div key={`dup-${index}`} className="recognition-badge">
              <span className="badge-shield">🛡️</span>
              <span className="badge-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
