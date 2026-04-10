'use client';

import React from 'react';
import '@/styles/Ecosystem.css';

const ecosystemCards = [
  {
    id: 1,
    label: 'ACADEMIC & CULTURAL EXCELLENCE',
    title: 'Where Innovation Meets Heritage',
    description: "Empowering future scientists with state-of-the-art laboratories and global research partnerships while celebrating Manipur's rich talent and spirit. MIU provides a holistic environment where education meets artistic excellence.",
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    label: 'CAREER SUCCESS',
    title: 'Global Career Opportunities',
    description: "Unmatched placement records with the world's top MNCs. We bridge the gap between classroom learning and industrial demands with our dedicated placement cell.",
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    label: 'ENTREPRENEURSHIP',
    title: 'Startup Incubation Center',
    description: 'Turning ideas into reality. Our on-campus incubation center provides the mentorship and funding resources needed for the next generation of entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    label: '360° LEARNING',
    title: 'The Complete Ecosystem',
    description: 'A comprehensive environment where academic learning, physical growth, and mental well-being coexist to form the perfect foundation for your future.',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 5,
    label: 'RESEARCH & INNOVATION',
    title: 'Leading the Way to Discovery',
    description: 'Our research-intensive programs and advanced facilities enable students to push the boundaries of knowledge, creating solutions for real-world challenges.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200'
  }
];

const HERO_HEADER_HEIGHT = 190; // px — the height of Card 1's header
const NAVBAR_HEIGHT = 80; // px — first card starts right below navbar

const Ecosystem = () => {
  return (
    <section className="ecosystem-section-container">
      {/* Sticky Group: Cards 1-4. This container's end will "pull" the sticky cards up. */}
      <div className="ecosystem-sticky-group">
        {ecosystemCards.slice(0, 4).map((card, index) => (
          <React.Fragment key={card.id}>
            <div
              className={`ecosystem-card card-${index + 1}`}
              style={{
                top: `${index === 0 ? NAVBAR_HEIGHT : NAVBAR_HEIGHT + HERO_HEADER_HEIGHT}px`,
                zIndex: 10 + index
              }}
            >
              {index === 0 ? (
                /* ── Card 1: LPU-style layout with header row + image ── */
                <div className="card-inner card-inner-hero">
                  <div className="card-hero-header">
                    <div className="card-hero-label">
                      <span className="hero-label-text">360° LEARNING ECOSYSTEM</span>
                      <div className="hero-label-line"></div>
                    </div>
                    <div className="card-hero-tagline">
                      <h2>Your Growth, Our Priority: Empowering every student through a complete learning experience</h2>
                    </div>
                  </div>
                  <div className="card-hero-body">
                    <div className="card-hero-story">
                      <span className="card-label">{card.label}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <a href="#apply" className="btn-explore">EXPLORE MORE <span>→</span></a>
                    </div>
                    <div className="card-hero-image">
                      <img src={card.image} alt={card.title} />
                      <div className="image-vignette"></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Cards 2-4: standard side-by-side layout ── */
                <div className="card-inner">
                  <div className="card-content">
                    <span className="card-meta">MIU ECOSYSTEM {card.id}</span>
                    <span className="card-label">{card.label}</span>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <div className="card-actions">
                      <a href="#apply" className="btn-explore">EXPLORE MORE <span>→</span></a>
                    </div>
                  </div>
                  <div className="card-image-box">
                    <img src={card.image} alt={card.title} />
                    <div className="image-vignette"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="card-spacer"></div>
          </React.Fragment>
        ))}
      </div>

      {/* Static Group: Card 5 onwards. This flows naturally after the sticky group. */}
      <div className="ecosystem-static-group">
        {ecosystemCards.slice(4).map((card) => (
          <div key={card.id} className="ecosystem-card non-sticky-card">
            <div className="card-inner">
              <div className="card-content">
                <span className="card-meta">MIU ECOSYSTEM {card.id}</span>
                <span className="card-label">{card.label}</span>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions">
                  <a href="#apply" className="btn-explore">EXPLORE MORE <span>→</span></a>
                </div>
              </div>
              <div className="card-image-box">
                <img src={card.image} alt={card.title} />
                <div className="image-vignette"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clearance barrier — pushes Happenings section below sticky cards */}
      <div className="ecosystem-clearance"></div>
    </section>
  );
};

export default Ecosystem;
