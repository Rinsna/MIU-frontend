import React from 'react';
import LeadershipMessages from '@/components/LeadershipMessages';

export const metadata = {
  title: 'About MIU | Manipur International University',
  description: 'Learn about the history, vision, and leadership of Manipur International University (MIU).',
};

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header" style={{padding: '160px 20px 80px', textAlign: 'center', background: '#f8f9fa', marginBottom: '40px'}}>
        <div className="hindi-title" style={{fontSize: '1.8rem', color: 'var(--lpu-orange)', marginBottom: '10px', fontWeight: '500'}}>माणिपुर अंतर्राष्ट्रीय विश्वविद्यालय</div>
        <h1 style={{fontSize: '3.5rem', color: 'var(--lpu-black)', marginBottom: '10px', fontWeight: '900', textTransform: 'uppercase'}}>Manipur International University</h1>
        <div className="tagline" style={{fontSize: '1.2rem', color: '#666', marginBottom: '40px', letterSpacing: '3px', fontWeight: '600'}}>EXCELLENCE • INNOVATION • TRANSFORMATION</div>
        
        <div className="about-intro-text" style={{fontSize: '1.15rem', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8', color: '#444', textAlign: 'justify'}}>
          <p style={{marginBottom: '20px'}}>
            Manipur International University (MIU) of Imphal, established in 2018 under the Manipur International University Ordinance, 2018 (Ordinance No.1 of 2018), promulgated by Her Excellency the Governor of Manipur is a State Private University. It holds the prestigious recognition from the University Grants Commission (UGC), Ministry of Education, Government of India under Section 2(f) and Section 22 of the UGC Act, 1956 as a State Private University.
          </p>
          <p style={{marginBottom: '20px'}}>
            We ensure our learners receive internationally recognized qualifications, enhance quality education and innovative research works. The University represents a transformative vision in higher education, seamlessly blending traditional wisdom with modern pedagogical approaches.
          </p>
          <p>
            Manipur International University (MIU) is an Autonomous Public International University of State Importance and Excellence. It is institutionally established and recognized by the State Government of Manipur and recognized and listed by the University Grants Commission (UGC), Ministry of Education, Government of India under Section 2(f) and Section 22 of the UGC Act, 1956. It has been declared as an “International Institution of Excellence” and an “Institution of State Importance,” as incorporated in the Manipur State Gazette Notification vide no. 458 dated February 14, 2019 by the Government of Manipur.
          </p>
        </div>
      </div>

      <LeadershipMessages />
    </div>
  );
}
