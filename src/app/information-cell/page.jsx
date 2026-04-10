'use client';

import React, { useState, useEffect } from 'react';
import API from '@/lib/api';
import '@/styles/InformationCell.css';

const InformationCell = () => {
  const [schoolsData, setSchoolsData] = useState({});
  const [loading, setLoading] = useState(true);

  const officialSchools = [
    'School Of Commerce',
    'School Of Computer Application',
    'School Of Engineering',
    'School Of Management',
    'School Of Science',
    'School Of Vocational Studies'
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/courses');
        
        // Group courses by school
        const grouped = officialSchools.reduce((acc, school) => {
          acc[school] = data.filter(course => course.school === school || course.category === school);
          return acc;
        }, {});

        setSchoolsData(grouped);
      } catch (err) {
        console.log('Error fetching courses (using defaults):', err.message);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

  if (loading) return <div className="loading-spinner">Loading MIU Programs...</div>;

  return (
    <div className="info-cell-page" style={{ paddingTop: '100px' }}>
      <header className="info-header">
        <div className="container">
          <span className="section-badge">ACADEMIC DIRECTORY</span>
          <h1 className="section-title">Schools & Departments</h1>
          <p className="section-subtitle">
            Explore our diverse range of world-class programs across various specialized schools.
          </p>
        </div>
      </header>

      <main className="info-content">
        {officialSchools.map((school) => (
          <section key={school} id={getSlug(school)} className="school-section">
            <div className="school-container">
              <div className="school-title-box">
                <h2>{school}</h2>
              </div>
              
              <div className="courses-grid">
                {schoolsData[school] && schoolsData[school].length > 0 ? (
                  schoolsData[school].map((course) => (
                    <div className="course-card" key={course._id}>
                      <div className="course-card-top">
                        <span className="course-icon">{course.icon || '🎓'}</span>
                        <span className="course-badge">PROGRAM</span>
                      </div>
                      <h3>{course.title}</h3>
                      <p className="course-desc">
                        {course.description || "Comprehensive program focused on deep academic foundations and practical industry skills."}
                      </p>
                      <div className="course-meta">
                        <div className="meta-item">
                          <span className="meta-label">Duration</span>
                          <span className="meta-value">{course.duration || '3 Years'}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">Eligibility</span>
                          <span className="meta-value">{course.eligibility || '10+2'}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    No programs currently listed for this school. Please check back soon.
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default InformationCell;
