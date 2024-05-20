import React from 'react';
import './TeamPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ceoImg from './img/ceoImg.png'
import ctaImg from './img/ctaImg.png'
import dirImg from './img/directorImg.png'
import dhiren from './img/dhiren.png'
import shanuj from './img/shanuj.png'
import himanshu from './img/himanshu.png'


const TeamPage = () => {

  const teamMembers = [
    {
      name: 'Meenakshi Pawar',
      role: 'Founder & CEO ',
      photo: ceoImg,
      description :'With a robust academic background and extensive professional experience, Meenakshi brings a wealth of knowledge and expertise to our organization. She embarked on their academic journey at Miranda House, Delhi University, where they laid a strong foundation in Mathematics and Science. Further honing their skills, they attended London Business School, an institution renowned for shaping global business leaders.In their professional career, she has demonstrated remarkable leadership and strategic acumen. They have previously served as a Team Lead at the State Bank of India, where they managed and executed high-impact financial projects, driving growth and innovation.'
    },
    {
      name: 'Jyotika B.',
      role: 'CTA',
      photo: ctaImg,
      description: 'As Chief Technology Advisor, I am proud to lead a team of dedicated professionals who are passionate about driving innovation and delivering exceptional value to our clients. We are committed to staying at the forefront of technological advancements, continuously refining and enhancing our offerings to meet the evolving needs of the market.'
    },
    {
      name: 'Sonia',
      role: 'Director',
      photo: dirImg,
      description:'As the Director of Altaneo, Im thrilled to extend a warm welcome to you, introducing fintech poised to redefine the landscape of financial services. At Altaneo, we are not just in the business of lending we arre in the business of empowering dreams, fuelling growth, and fostering financial inclusion.'
    },
    {
      name: 'Dhiren Madhukar',
      role: 'Software Developer',
      photo: dhiren,
      description: 'Proficiently utilized Java Spring Boot to design and develop solutions for optimizing data synchronization processes. This involved understanding the intricacies of the existing system and identifying areas for improvement.'
    },
    {
      name: 'Shanuj Yadav',
      role: 'Jr.Software Developer',
      photo: shanuj,
      description: 'Excellent in building user interfaces using React, a popular JavaScript library for building interactive UI components. You leverage React component-based architecture to create reusable and modular UI elements, enhancing code maintainability and scalability.'
    },
    {
      name: 'Himanshu Narwal',
      role: 'Software Intern',
      photo: himanshu,
      description: 'As an intern, i have the opportunity to gain valuable skills, practical experience, and industry exposure that will serve as a solid foundation for my career as a software developer.'
    },
  ]
  
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <div className="team-member-photo">
            <img src={member.photo} alt={member.name} />
          </div>
          <div className="team-member-details">
            <h3 className='text-bold text-2xl'>{member.name}</h3>
            <p className='text-white text-lg'>{member.role}</p>
            <span className='text-justify'>{member.description}</span>
          </div>
        </div>
      ))}
    </div>

  );
}

export default TeamPage;
