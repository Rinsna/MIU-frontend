'use client';

import React, { useState, useEffect, useRef } from 'react';
import '@/styles/Ecosystem.css';

const ecosystemStories = [
  {
    id: 1,
    title: 'Advanced Research & Innovation Hub',
    description: 'Empowering future scientists with state-of-the-art laboratories and global research partnerships. Our students are pioneering breakthroughs in biotechnology and AI.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Cultural Heritage & Vibrant Campus',
    description: 'A grand celebration of Manipur’s rich talent and spirit. MIU provides a holistic environment where education meets artistic excellence.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Global Career Opportunities',
    description: 'Unmatched placement records with the world’s top MNCs. We bridge the gap between classroom learning and industrial demands.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200'
  }
];

const Ecosystem = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const totalHeight = sectionRef.current.offsetHeight;
      const scrollY = -rect.top;
      const progress = Math.min(Math.max(scrollY / (totalHeight - viewportHeight), 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalSlides = ecosystemStories.length;

  return (
    <section className="ecosystem-scroll-wrapper" ref={sectionRef}>
      <div className="ecosystem-sticky-container">
        <div className="container">
          
          <div className="ecosystem-header">
            <div className="ecosystem-title-box">
              <span className="ecosystem-main-label">360° LEARNING ECOSYSTEM</span>
            </div>
            <h2 className="ecosystem-tagline">
              Your Growth, Our Priority: Empowering every student through a complete learning experience
            </h2>
          </div>

          <div className="ecosystem-slider-outer">
            <div 
              className="ecosystem-slider-container" 
              style={{ 
                transform: `translateY(-${scrollProgress * (totalSlides - 1) * 500}px)`,
                transition: 'transform 0.1s linear'
              }}
            >
              {ecosystemStories.map((story) => (
                <div className="ecosystem-slide" key={story.id}>
                  <div className="ecosystem-content-left">
                    <div className="ecosystem-content-meta">MIU STORY {story.id}</div>
                    <h2>{story.title}</h2>
                    <p>{story.description}</p>
                    <a href="#learn" className="btn btn-primary">Learn More</a>
                  </div>
                  <div className="ecosystem-image-right">
                    <div className="ecosystem-image-overlay"></div>
                    <img src={story.image} alt={story.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="ecosystem-ticker">
          <div className="ticker-content">
            <span className="ticker-item">★ ADMISSIONS OPEN FOR 2026</span>
            <span className="ticker-item">★ RANKED #1 AMONG TOP UNIVERSITIES</span>
            <span className="ticker-item">★ HIGHEST PACKAGE: 64 LPA</span>
            <span className="ticker-item">★ OVER 2000+ GLOBAL RECRUITERS</span>
            <span className="ticker-item">★ WORLD CLASS RESEARCH INFRASTRUCTURE</span>
            <span className="ticker-item">★ APPLY NOW FOR SCHOLARSHIPS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
