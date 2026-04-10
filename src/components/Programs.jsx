'use client';

import React, { useState, useEffect } from 'react';
import API from '@/lib/api';
import '@/styles/Programs.css';

const Programs = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/courses');
        if (data && data.length > 0) {
          setCourses(data);
        }
      } catch (err) {
        console.log('Error fetching courses, using empty/default state');
      }
      setLoading(false);
    };
    fetchCourses();
  }, []);

  return (
    <section id="academics" className="programs-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-badge">ACADEMIC EXCELLENCE</span>
          <h2 className="section-title">Discover Your Discipline</h2>
          <p className="section-subtitle">
            Choose from a wide array of globally recognized programs designed to build future leaders.
          </p>
        </div>

        <div className="programs-grid">
          {courses.map((prog) => (
            <div className="program-card" key={prog._id || prog.id}>
              <div className="program-icon-wrapper">
                <span className="program-icon">{prog.icon}</span>
              </div>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.description}</p>
              
              <div className="program-footer">
                <span className="program-highlight">✓ {prog.highlight}</span>
                <a href="#explore" className="program-link">Explore ➔</a>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-cta-container">
          <a href="#all-programs" className="btn btn-outline btn-large">View All 300+ Programs</a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
