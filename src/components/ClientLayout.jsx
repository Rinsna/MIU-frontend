'use client';

import React, { useState, useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function ClientLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    // 1.5 seconds loading view, then fade out
    const timer = setTimeout(() => {
      setFadeSplash(true);
      setTimeout(() => setShowSplash(false), 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <div className={`app-container ${!showSplash ? 'page-fade-in' : ''}`}>
        {showSplash && (
          <div className={`splash-screen ${fadeSplash ? 'fade-out' : ''}`}>
            <div className="splash-content">
              <img src="/emblem.png" alt="MIU Logo" className="splash-logo" />
              <div className="splash-miu-blocks">
                <span>M</span>
                <span>I</span>
                <span>U</span>
              </div>
            </div>
          </div>
        )}

        <Navbar />
        
        {/* LPU Style Sticky Right Action Buttons */}
        <div className="sticky-ribbon">
          <button className="sticky-button">Apply Now</button>
          <button className="sticky-button" style={{background: 'var(--lpu-black)'}}>Enquire</button>
        </div>

        <main>{children}</main>

        <Footer />
        <MobileBottomNav />
      </div>
    </AuthProvider>
  );
}
