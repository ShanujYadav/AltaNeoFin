import React from 'react';
import './TeamPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ceoImg from '../../../public/assets/img/ceoImg.png'
import ctaImg from '../../assets/img/ctaImg.png'
import dirImg from '../../assets/img/directorImg.png'

import dhiren from '../../../public/assets/img/dhiren.png'
import shanuj from '../../../public/assets/img/shanuj.png'
import himanshu from '../../../public/assets/img/himanshu.png'
import ayushi from '../../../public/assets/img/ayushi.png'
import sanskruti from '../../../public/assets/img/sanskruti.png'


import Topbar from '../common/Topbar';
import Footer from '../Footer/Footer';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Meenakshi Pawar',
      role: 'Chairperson and MD',
      photo: ceoImg,
      description: 'With a robust academic background and extensive professional experience, Meenakshi brings a wealth of knowledge and expertise to our organization. She embarked on their academic journey at Miranda House, Delhi University, where they laid a strong foundation in Mathematics and Science. Further honing their skills, they attended London Business School, an institution renowned for shaping global business leaders.In their professional career, she has demonstrated remarkable leadership and strategic acumen. They have previously served as a Team Lead at the State Bank of India, where they managed and executed high-impact financial projects, driving growth and innovation.'
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
      description: 'As the Director of Altaneo, Im thrilled to extend a warm welcome to you, introducing fintech poised to redefine the landscape of financial services. At Altaneo, we are not just in the business of lending we arre in the business of empowering dreams, fuelling growth, and fostering financial inclusion.'
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
      description: 'Excellent in building user interfaces using React and Redux js, a popular JavaScript library for building interactive UI components. You leverage React component-based architecture to create reusable and modular UI elements, enhancing code maintainability and scalability.'
    },
    {
      name: 'Ayushi Bansal',
      role: 'Digital Marketing Executive',
      photo: ayushi,
      description: 'A dynamic digital marketing expert with over two years of experience in creating impactful marketing strategies. I have Completed MBA with a dual specialization in Marketing and Finance, equipping with a robust understanding of market analytics and financial insights. I have successfully executed a range of digital campaigns, from social media marketing to content creation and email marketing.'
    },
    {
      name: 'Himanshu Narwal',
      role: 'Software Intern',
      photo: himanshu,
      description: 'As an intern, i have the opportunity to gain valuable skills, practical experience, and industry exposure that will serve as a solid foundation for my career as a software developer.'
    },
    {
      name: 'Sanskruti Ghosh',
      role: 'Accounts Intern',
      photo: sanskruti,
      description: 'I hold a Bachelor degree in Commerce (Hons) from the University of Delhi, where I built a robust foundation in financial accounting, management accounting, and financial data management. My passion for numbers and meticulous attention to detail have motivated me to pursue practical experience in accounting and finance. I am eager to leverage my academic knowledge and analytical skills in real-world applications and look forward to contributing to the teams success while gaining valuable insights and experience.'
    },
  ]

  return (
    <div>
      <Topbar
        title='Our Team'
        desc='Meet our dedicated team of experts committed to driving your success.Together, we bring innovative solutions to enhance your supply chain.'
        from='Home'
        to='Team' />

      <div className="team-container my-5">
        <ul role="list" class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((item, index) => (
            <li key={index} class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 mb-0 flex-col w-full md:w-80 h-96 p-4">
                <img class="mx-auto mb-1 h-48 w-48 flex-shrink-0 border-black rounded-full" src={item.photo} alt="" />
                <h3 class="mt-2 text-md font-semibold text-gray-900">{item.name}</h3>
                <dl class="mt-1 flex flex-grow flex-col justify-between">
                  <dd class="mt-0">
                    <span class="inline-flex items-center rounded-full bg-blue-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">{item.role}</span>
                  </dd>
                  <hr class="mt-2" />
                  <dd class="mt-1 flex-grow overflow-y-auto h-32 text-justify">
                    {item.description}
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default TeamPage