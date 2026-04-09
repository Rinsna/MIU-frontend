'use client';

import React from 'react';
import '@/styles/LeadershipMessages.css';

const LeadershipMessages = () => {
  const leadershipData = [
    {
      role: "Chancellor",
      name: "Dr. Hari Kumar",
      title: "Welcome Message",
      image: "/leadership/chancellor.png",
      message: [
        "Dear Students, Faculty, Staff, and Visitors,",
        "Welcome to Manipur International University. It is both an honor and a privilege to serve as the Chancellor of this esteemed institution. At MIU, we are committed to fostering a culture defined by academic excellence, innovation, and inclusivity, where every learner is empowered to realize their fullest potential.",
        "Our university reflects a strong legacy of achievement and an unwavering commitment to shaping future-ready leaders. We provide a dynamic academic environment that nurtures intellectual growth, professional competence, and ethical responsibility. Our distinguished faculty serve not only as educators but as mentors and thought leaders, driving impactful research and knowledge creation.",
        "We firmly believe that education is a transformative force that shapes individuals and contributes meaningfully to society. Our diverse and vibrant campus encourages collaboration, critical inquiry, and lifelong learning.",
        "As we move forward, we remain dedicated to advancing academic excellence through innovative programs, interdisciplinary engagement, and a strong focus on societal progress. I invite you to explore our university and become a part of this inspiring journey."
      ],
      signature: {
        name: "Dr. Hari Kumar",
        role: "Chancellor, Manipur International University"
      }
    },
    {
      role: "Vice Chancellor",
      name: "Vice Chancellor",
      title: "Message from the Vice Chancellor",
      image: "/leadership/vc.png",
      message: [
        "Dear Students, Faculty Members, and Distinguished Visitors,",
        "It is both an honor and a privilege to welcome you to Manipur International University. As the Vice Chancellor, I take great pride in leading an institution that is committed to academic excellence, innovation, and the holistic development of its learners. At MIU, we envision education not merely as the acquisition of knowledge, but as a transformative journey that empowers individuals to think critically, act responsibly, and contribute meaningfully to society.",
        "Our university strives to create a dynamic and inclusive learning ecosystem where intellectual curiosity is nurtured, research is encouraged, and innovation thrives. With a strong focus on interdisciplinary learning and industry integration, we prepare our students to meet the evolving challenges of a rapidly changing global landscape.",
        "We are dedicated to upholding the highest standards of teaching, research, and professional development. Through the collective efforts of our distinguished faculty and vibrant academic community, we aim to cultivate leaders who are not only competent professionals but also responsible global citizens.",
        "As you explore Manipur International University, you will find a community driven by purpose, excellence, and continuous growth. I extend my best wishes to all of you for a successful and fulfilling journey ahead."
      ],
      signature: {
        name: "Vice Chancellor",
        role: "Manipur International University"
      }
    },
    {
      role: "Pro Vice Chancellor",
      name: "Pro Vice Chancellor",
      title: "Welcome Message",
      image: "/leadership/pro_vc.png",
      message: [
        "Dear Students, Faculty, and Esteemed Stakeholders,",
        "It is with great pride and a deep sense of responsibility that I extend a warm welcome to you at Manipur International University. As the Pro Vice Chancellor, I am honored to be part of a progressive academic institution committed to excellence, innovation, and transformative education.",
        "Our university is dedicated to fostering an ecosystem that nurtures intellectual curiosity, critical thinking, and professional competence. Through a carefully designed blend of academic rigor, skill-based learning, and industry engagement, we strive to empower our students to achieve their aspirations and contribute meaningfully to society.",
        "The Office of the Pro Vice Chancellor is committed to strengthening academic excellence, operational efficiency, and institutional growth. We aim to cultivate a vibrant academic community where students, faculty, and staff work collaboratively towards knowledge creation, innovation, and holistic development."
      ],
      signature: {
        name: "Pro Vice Chancellor",
        role: "(Acting Vice Chancellor), MIU"
      }
    },
    {
      role: "Registrar",
      name: "Registrar",
      title: "Welcome Message",
      image: "/leadership/registrar.png",
      message: [
        "Dear Students, Faculty, and Esteemed Stakeholders,",
        "It gives me immense pleasure to welcome you to Manipur International University (MIU)—an institution committed to academic excellence, innovation, and holistic development.",
        "Nestled amidst the pristine valleys and scenic blue hills of Manipur, MIU offers an intellectually stimulating and serene environment that is uniquely conducive to high-quality learning and research. Our campus is not merely a place of education, but a vibrant ecosystem where ideas flourish, curiosity is nurtured, and future leaders are shaped.",
        "In today’s rapidly evolving, technology-driven global landscape, the demands on learners are dynamic and ever-expanding. At MIU, we are deeply committed to equipping our students with future-ready competencies, ensuring they remain competitive and relevant in the global marketplace. May your journey here be one of discovery, growth, and excellence."
      ],
      signature: {
        name: "Registrar",
        role: "Manipur International University"
      }
    },
    {
      role: "Director – Admissions",
      name: "Director – Admissions",
      title: "Welcome Message",
      image: "/leadership/director_admissions.png",
      message: [
        "Dear Students, Faculty, and Friends,",
        "It gives me immense pleasure to welcome you to Manipur International University. At MIU, we are committed to fostering an academic environment that promotes excellence, innovation, and meaningful engagement.",
        "We firmly believe that every learner possesses the potential to achieve excellence when guided by the right opportunities and mentorship. Whether you are an aspiring student, a researcher, or a valued member of the academic community, MIU offers a supportive ecosystem designed to help you grow, excel, and succeed.",
        "Recognized among the emerging private universities in Manipur, MIU emphasizes industry-aligned programs, practical learning, and a vibrant campus experience. We look forward to welcoming you to the MIU community and being a part of your academic and professional journey."
      ],
      signature: {
        name: "Director – Admissions",
        role: "Manipur International University"
      }
    },
    {
      role: "Controller of Examinations",
      name: "Controller of Examinations (COE)",
      title: "Message from the COE",
      image: "/leadership/coe.png",
      message: [
        "Dear Students,",
        "Greetings from Manipur International University. It is my privilege to extend my best wishes to all students as you embark on your academic journey with us. The Office of the Controller of Examinations plays a pivotal role in upholding the integrity, transparency, and credibility of the university’s evaluation system.",
        "At MIU, we are committed to ensuring a fair, robust, and student-centric examination process that accurately reflects academic performance and learning outcomes. Our evaluation framework is designed to maintain the highest standards of confidentiality, consistency, and academic rigor.",
        "The Examination Department remains dedicated to providing timely support, clear communication, and efficient processes to facilitate a smooth and stress-free examination experience for every student. I extend my sincere wishes for your success."
      ],
      signature: {
        name: "Controller of Examinations (COE)",
        role: "Manipur International University"
      }
    }
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <div className="leadership-title">
          <h2>Our Leadership</h2>
          <p>Guided by visionaries dedicated to educational excellence and innovation.</p>
        </div>

        {leadershipData.map((leader, index) => (
          <div key={index} className={`leadership-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="leadership-image-box">
              <img src={leader.image} alt={leader.name} className="leadership-image" />
            </div>
            <div className="leadership-content">
              <span className="leadership-badge">{leader.role}</span>
              <h3 className="leadership-name">{leader.name}</h3>
              <p className="leadership-role">{leader.title}</p>
              <div className="leadership-text">
                {leader.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="leadership-signature">
                <span className="sig-name">{leader.signature.name}</span>
                <span className="sig-role">{leader.signature.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipMessages;
