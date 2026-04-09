'use client';

import React from 'react';
import '@/styles/Placements.css';

const companyLogos = [
  "Microsoft", "Google", "Amazon", "Cognizant", 
  "Capgemini", "TCS", "Infosys", "Wipro", "IBM", "Accenture"
];

const Placements = () => {
  return (
    <section className="placements-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-badge">CAREER OUTCOMES</span>
          <h2 className="section-title">Record-Breaking Placements</h2>
          <p className="section-subtitle">
            Our students are recruited by top Fortune 500 companies globally, ensuring a massive return on investment.
          </p>
        </div>

        <div className="placement-stats-row">
          <div className="p-stat-box">
            <h3 className="p-stat-val text-primary">2000+</h3>
            <p className="p-stat-label">Recruiters Hired</p>
          </div>
          <div className="p-stat-box">
            <h3 className="p-stat-val text-primary">₹ 3 Crore</h3>
            <p className="p-stat-label">Highest International Package</p>
          </div>
          <div className="p-stat-box">
            <h3 className="p-stat-val text-primary">₹ 64 Lakh</h3>
            <p className="p-stat-label">Highest Domestic Package</p>
          </div>
        </div>

        {/* Marquee for Companies */}
        <div className="companies-marquee-wrapper">
          <div className="companies-marquee">
            {companyLogos.map((c, i) => (
              <div key={i} className="company-logo-box text-logo">{c}</div>
            ))}
            {companyLogos.map((c, i) => (
              <div key={`dup-${i}`} className="company-logo-box text-logo">{c}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Placements;
