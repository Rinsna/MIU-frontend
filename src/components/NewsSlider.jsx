'use client';

import React, { useState, useEffect, useRef } from 'react';
import '@/styles/NewsSlider.css';

const newsItems = [
  {
    id: 1,
    category: 'ACADEMICS',
    date: 'Oct 24, 2026',
    title: 'MIU Partners with Global Tech Consortium for AI Research',
    excerpt: 'A landmark agreement that brings world-class AI resources and research opportunities to MIU students.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'PLACEMENT',
    date: 'Oct 22, 2026',
    title: 'Highest Record: 6 students secure 45 LPA + packages',
    excerpt: 'The placement season kicks off with a bang as top tech giants recruit heavily from our engineering pool.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'CAMPUS LIFE',
    date: 'Oct 20, 2026',
    title: 'MIU Annual Cultural Fest "Spectra 2026" Announced',
    excerpt: 'Get ready for the biggest celebration of talent, art, and music in the North East India region.',
    image: 'https://images.unsplash.com/photo-1514525253361-b83f85df0f5c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'RESEARCH',
    date: 'Oct 18, 2026',
    title: 'Groundbreaking Study on Himalayan Biodiversity Published',
    excerpt: 'MIU faculty and students publish an extensive report in the Journal of Biological Sciences.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'ADMISSIONS',
    date: 'Oct 15, 2026',
    title: 'Scholarship Test registrations reach all-time high',
    excerpt: 'Over 50,000 students across India have registered for the upcoming merit scholarship examination.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth > 992) setVisibleCards(3);
      else if (window.innerWidth > 600) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex >= newsItems.length - visibleCards) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(newsItems.length - visibleCards);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, visibleCards]);

  return (
    <section className="news-slider-section">
      <div className="container">
        
        <div className="news-slider-header">
          <div className="news-slider-title">
            <h2>Latest Happening @ MIU</h2>
            <p>Catch the newest updates, research breakthroughs, and campus highlights.</p>
          </div>
          <div className="slider-controls">
            <button onClick={prevSlide} className="control-btn">←</button>
            <button onClick={nextSlide} className="control-btn">→</button>
          </div>
        </div>

        <div 
          className="news-slider-track-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ height: '450px', overflow: 'hidden' }}
        >
          <div 
            className="news-slider-track" 
            style={{ 
              transform: `translateY(-${currentIndex * 450}px)`,
              transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {Array.from({ length: Math.ceil(newsItems.length / visibleCards) }).map((_, rowIndex) => (
              <div className="news-row" key={rowIndex} style={{ display: 'flex', height: '450px', flexShrink: 0 }}>
                {newsItems.slice(rowIndex * visibleCards, (rowIndex + 1) * visibleCards).map((news) => (
                  <div className="news-card-wrapper" key={news.id} style={{ width: `${100 / visibleCards}%` }}>
                    <div className="news-card">
                      <div className="news-image-box">
                        <span className="news-badge">{news.category}</span>
                        <img src={news.image} alt={news.title} />
                      </div>
                      <div className="news-info">
                        <span className="news-date">{news.date}</span>
                        <h3>{news.title}</h3>
                        <p className="news-excerpt">{news.excerpt}</p>
                        <a href="#read" className="read-more-link">Read More ➔</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSlider;
