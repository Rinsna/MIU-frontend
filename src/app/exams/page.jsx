import React from 'react';

export const metadata = {
  title: 'Examinations | Manipur International University',
  description: 'Access exam schedules, results, and important examination-related announcements at MIU.',
};

export default function Exams() {
  return (
    <div className="page-container" style={{padding: '160px 20px', textAlign: 'center', background: '#fff', minHeight: '60vh'}}>
      <h1 style={{fontSize: '3.5rem', color: 'var(--lpu-black)', marginBottom: '20px', fontWeight: '900'}}>Examinations</h1>
      <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#444'}}>
        Access official schedules, results, and examination-related announcements for all academic departments.
      </p>
      <div style={{marginTop: '40px'}} className="exam-buttons">
          <button className="btn btn-primary" style={{margin: '10px'}}>View Date Sheet</button>
          <button className="btn btn-outline" style={{margin: '10px'}}>Result Portal</button>
      </div>
    </div>
  );
}
