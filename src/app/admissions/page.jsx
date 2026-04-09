import React from 'react';

export const metadata = {
  title: 'Admissions 2026 | Manipur International University',
  description: 'Apply for admission to Manipur International University. Join our global academic community today.',
};

export default function Admissions() {
  return (
    <div className="page-container" style={{padding: '160px 20px', textAlign: 'center', background: '#fff', minHeight: '60vh'}}>
      <h1 style={{fontSize: '3.5rem', color: 'var(--lpu-black)', marginBottom: '20px', fontWeight: '900'}}>Admissions 2026</h1>
      <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#444'}}>
        Join Manipur International University and transform your future. We offer a wide range of programs 
        designed to provide global exposure and academic excellence.
      </p>
      <div style={{marginTop: '40px'}}>
        <button className="apply-blink-btn" style={{padding: '18px 50px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer'}}>Apply for Admission</button>
      </div>
    </div>
  );
}
