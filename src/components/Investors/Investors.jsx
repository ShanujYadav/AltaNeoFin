import React from 'react';
import Marquee from 'react-fast-marquee';

import five from '../../assets/five.png';
import four from '../../assets/four.png';
import nine from '../../assets/nine.png';
import one from '../../assets/one.png';
import seven from '../../assets/seven.png';
import './Investors.css';

const Investors = () => {
  return (
    <div className="marquee-container">
    
      <Marquee direction="right">
        
        <div className="image_wrapper">
          <img src={five} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={four} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={nine} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={one} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={seven} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Investors;
