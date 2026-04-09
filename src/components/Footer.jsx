'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-col col-about">
            <Link href="/" style={{textDecoration: 'none'}}><h2 className="footer-logo"><span>MANIPUR</span> INT. UNIVERSITY</h2></Link>
            <p className="footer-about-text">
              Transforming education with a globally recognized curriculum, 
              industry-oriented learning, and an unwavering commitment to student success.
            </p>
            <div className="social-links">
              <a href="#fb" className="social-icon">f</a>
              <a href="#tw" className="social-icon">X</a>
              <a href="#in" className="social-icon">in</a>
              <a href="#ig" className="social-icon">ig</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about">About MIU</Link></li>
              <li><Link href="/admissions">Admissions 2026</Link></li>
              <li><Link href="/news-events">News & Events</Link></li>
              <li><Link href="/information-cell">Placement Cell</Link></li>
              <li><Link href="/information-cell">Alumni Network</Link></li>
              <li><Link href="/about">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Schools & Institutes</h4>
            <ul className="footer-links">
              <li><Link href="/about">School of Engineering</Link></li>
              <li><Link href="/about">School of Medicine</Link></li>
              <li><Link href="/about">School of Law</Link></li>
              <li><Link href="/about">School of Business</Link></li>
              <li><Link href="/about">School of Design</Link></li>
            </ul>
          </div>

          <div className="footer-col col-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-info">
              <li><span>📍</span> MIU Campus, Manipur, India</li>
              <li><span>📞</span> Toll Free: 1800 102 4431</li>
              <li><span>📞</span> General: +91 98765 43210</li>
              <li><span>✉️</span> admissions@miu.co.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Manipur International University. All Rights Reserved.</p>
          <div className="bottom-links">
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms of Use</Link>
            <Link href="/about">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
