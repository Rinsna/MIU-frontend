'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/styles/Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={`lpu-header ${!isLandingPage ? 'other-page-header' : ''}`}>
      <div className="top-strip">
        <div className="strip-flex edge-to-edge">
          <div className="strip-left">
          </div>
          <div className="strip-right">
            <ul className="top-links">
              <li><Link href="/about">JOBS</Link></li>
              <li><Link href="/news-events">HAPPENINGS</Link></li>
              <li><Link href="/information-cell">ONLINE EDUCATION</Link></li>
              <li><Link href="/about">STUDY ABROAD</Link></li>
              <li className="highlight-link"><Link href="/admissions">MIUNEST</Link></li>
              <li><Link href="/information-cell">PUBLIC SELF DISCLOSURE</Link></li>
              <li><Link href="/about">SCHOOL & DEPARTMENTS</Link></li>
              <li><Link href="/about">CONTACT</Link></li>
              <li><Link href="/admin/login" className="login-top-btn">LOGIN</Link></li>
            </ul>
            <div className="top-logo-boxes">
              <span>M</span>
              <span>I</span>
              <span>U</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`main-navbar ${isSticky ? 'sticky-nav' : ''} ${!isLandingPage && !isSticky ? 'other-page-nav' : ''}`}>
        <div className="nav-flex edge-to-edge" style={{paddingRight: '20px'}}>
          <Link href="/" className={`absolute-logo-wrapper ${isSticky ? 'logo-sticky' : ''}`} style={{textDecoration: 'none', color: 'inherit'}}>
            {!isSticky ? (
              <img src="/images/MIU_Logo.png" alt="Manipur International University" className="landing-logo" />
            ) : (
              <>
                <img src="/emblem.png" alt="MIU Crest" className="abs-emblem" />
                <div className="abs-miu-blocks">
                  <span>M</span>
                  <span>I</span>
                  <span>U</span>
                </div>
                <div className="abs-text">
                  <span className="big-word">MANIPUR</span>
                  <span className="big-word">INTERNATIONAL</span>
                  <span className="big-word">UNIVERSITY</span>
                </div>
              </>
            )}
          </Link>
          
          <nav className="desktop-nav">
            <ul>
              <li><Link href="/">HOME</Link></li>
              
              <li className="has-dropdown">
                <Link href="/about">ABOUT US <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/about">About MIU</Link></li>
                  <li><Link href="/about">Leadership Team</Link></li>
                  <li><Link href="/information-cell">Administration & Academician</Link></li>
                  <li><Link href="/information-cell">Public Self Disclosure</Link></li>
                  <li><Link href="/information-cell">UGC Performance</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/information-cell">SCHOOLS <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/information-cell#school-of-commerce">School Of Commerce</Link></li>
                  <li><Link href="/information-cell#school-of-computer-application">School Of Computer Application</Link></li>
                  <li><Link href="/information-cell#school-of-engineering">School Of Engineering</Link></li>
                  <li><Link href="/information-cell#school-of-management">School Of Management</Link></li>
                  <li><Link href="/information-cell#school-of-science">School Of Science</Link></li>
                  <li><Link href="/information-cell#school-of-vocational-studies">School Of Vocational Studies</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/information-cell">ACADEMICS <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/information-cell">Syllabus and Courses</Link></li>
                  <li><Link href="/information-cell">Academic Collaborations</Link></li>
                  <li><Link href="/exams">Exams</Link></li>
                  <li><Link href="/information-cell">Academic Council</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/admissions">ADMISSIONS <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/admissions">Admissions Overview</Link></li>
                  <li><Link href="/admissions">Apply Now</Link></li>
                  <li><Link href="/information-cell">Scholarship Policy</Link></li>
                  <li><Link href="/information-cell">Refund Policy</Link></li>
                  <li><Link href="/information-cell">Reservation Roster</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/information-cell">STUDENT LIFE <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/information-cell">Alumni</Link></li>
                  <li><Link href="/information-cell">Health Facilities</Link></li>
                  <li><Link href="/miu-cell">Anti Ragging</Link></li>
                  <li><Link href="/miu-cell">Equal Opportunity Cell</Link></li>
                  <li><Link href="/miu-cell">Internal Complaint Committee</Link></li>
                  <li><Link href="/miu-cell">SGRC</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/miu-cell">RESEARCH <span className="dropdown-plus">+</span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/miu-cell">Research And Development Cell</Link></li>
                  <li><Link href="/miu-cell">Project Development Cell</Link></li>
                  <li><Link href="/miu-cell">Incubation Center</Link></li>
                  <li><Link href="/miu-cell">IQAC</Link></li>
                </ul>
              </li>

              <li><Link href="/about">CONTACT US</Link></li>
            </ul>
          </nav>
          
          <div className="nav-actions">
            <Link href="/admissions" className="apply-blink-btn main-nav-apply">APPLY NOW</Link>
            <button className="search-btn">🔍</button>
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-main-links">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link href="/information-cell" onClick={() => setIsMenuOpen(false)}>SCHOOLS</Link></li>
            <li><Link href="/information-cell" onClick={() => setIsMenuOpen(false)}>ACADEMICS</Link></li>
            <li><Link href="/admissions" onClick={() => setIsMenuOpen(false)}>ADMISSIONS</Link></li>
            <li><Link href="/information-cell" onClick={() => setIsMenuOpen(false)}>STUDENT LIFE</Link></li>
            <li><Link href="/miu-cell" onClick={() => setIsMenuOpen(false)}>RESEARCH</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link></li>
          </ul>
          <div className="mobile-utility-links">
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>JOBS</Link>
            <Link href="/news-events" onClick={() => setIsMenuOpen(false)}>HAPPENINGS</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>STUDY ABROAD</Link>
            <Link href="/admin/login" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
            <Link href="/admin/login" onClick={() => setIsMenuOpen(false)}>ADMIN LOGIN</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
