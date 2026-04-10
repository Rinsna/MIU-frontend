'use client';

import React, { useState, useEffect } from 'react';
import '@/styles/CampusLife.css';

const campusData = [
  { id: 'library', name: 'Central Library', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800' },
  { id: 'labs', name: 'High-Tech Labs', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { id: 'hostels', name: 'Premium Hostels', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800' },
  { id: 'sports', name: 'Sports Complex', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800' }
];

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState(campusData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = campusData.findIndex(t => t.id === currentTab.id);
        const nextIndex = (currentIndex + 1) % campusData.length;
        return campusData[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="campus" className="campus-section section-padding">
      <div className="container">
        
        <div className="campus-header">
          <div>
            <span className="section-badge">Life At MIU</span>
            <h2 className="section-title">A Campus Built For You</h2>
            <p className="section-subtitle campus-sub">
              Experience world-class infrastructure spread over a massive, eco-friendly campus designed to inspire creativity and innovation.
            </p>
          </div>
          <div className="campus-cta">
            <a href="#tour" className="btn btn-orange">Virtual Tour 360°</a>
          </div>
        </div>

        <div className="campus-interactive">
          <div className="campus-tabs">
            {campusData.map((tab) => (
              <button 
                key={tab.id}
                className={`campus-tab ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="campus-gallery">
            <div className="gallery-glass">
              <img 
                src={activeTab.img} 
                alt={activeTab.name} 
                className="gallery-image fade-in-image" 
                key={activeTab.id}
              />
              <div className="gallery-glass-info">
                <h3>{activeTab.name}</h3>
                <p>State-Of-The-Art Facilities</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampusLife;
