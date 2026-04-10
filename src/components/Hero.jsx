'use client';

import React, { useState, useEffect } from 'react';
import API from '@/lib/api';
import '@/styles/Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroData, setHeroData] = useState({
    title: 'TRANSFORM <br /> YOUR FUTURE',
    subtitle: "Join India's largest single-campus private university. Unmatched placements, state-of-the-art labs, and a truly global environment.",
    images: []
  });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const { data } = await API.get('/settings/hero');
        if (data && data.content) {
          setHeroData(data.content);
        }
      } catch (err) {
        console.log('Using default hero data (settings not found)');
      }
    };
    fetchHero();
  }, []);

  const { title, subtitle, images } = heroData;
  const displayImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920'
  ];

  useEffect(() => {
    if (displayImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayImages.length]);

  return (
    <section className="lpu-hero-container">
      {displayImages.map((img, index) => (
        <div 
          key={index}
          className={`lpu-hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}
      <div className="lpu-hero-overlay"></div>
      
      <div className="container hero-layout">
        <div className="hero-typography">
          <h1 className="hero-main-title" dangerouslySetInnerHTML={{ __html: title.includes('<br') ? title : title.replace('YOUR FUTURE', '<br /><span class="orange-text">YOUR FUTURE</span>') }}>
          </h1>
          <p className="hero-subtext">{subtitle}</p>
          <div className="hero-buttons">
            <a href="#prospectus" className="btn btn-orange">Admissions 2026</a>
            <a href="#apply" className="btn btn-black">Apply Now</a>
          </div>
          
          <div className="hero-trust-badges">
            <div className="trust-item">
              <span className="big-num">3 CR</span>
              <span className="small-txt">Highest Package</span>
            </div>
            <div className="trust-item">
              <span className="big-num">NAAC</span>
              <span className="small-txt">A++ Grade</span>
            </div>
            <div className="trust-item">
              <span className="big-num">2000+</span>
              <span className="small-txt">Recruiters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
