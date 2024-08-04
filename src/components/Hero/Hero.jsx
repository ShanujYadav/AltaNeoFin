import React, { useEffect, useState } from 'react';
import './Hero.css';
import video from '../../assets/video.mp4';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className='hero container'>
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={`hero-text ${showText ? 'fade-in' : ''}`}>
        <h1 className={`typewriter ${showText ? 'fade-in' : ''}`}>Empowering Growth Through Seamless Financial Solutions</h1>
        <p className={`typewriter ${showText ? 'fade-in' : ''}`} style={{ color: 'white' }}>Enabling more than $1 billion working capital annually</p>
        <button className={`btn ${showText ? 'scale-in' : ''}`}>
          <a href="/login" smooth={true} offset={0} duration={500} >
            Get Started
          </a>
          <FaArrowRightLong className='ml-2' />
        </button>
      </div>
    </div>
  )
}

export default Hero
