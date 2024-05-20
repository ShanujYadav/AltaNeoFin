import React from 'react';
import Marquee from 'react-fast-marquee';
import eight from '../../assets/eight.png';
import five from '../../assets/five.png';
import four from '../../assets/four.png';
import nine from '../../assets/nine.png';
import one from '../../assets/one.png';
import seven from '../../assets/seven.png';
import './Partners.css';

const Partners = () => {
  return (
    <div>
      {/* First Marquee component for images above */}
      <Marquee direction="left" speed={200} className="upper-marquee">
        <div className='image_wrapper'>
          <img src={eight} alt="" />
        </div>
        <div className='image_wrapper'>
          <img src={five} alt="" />
        </div>
        <div className='image_wrapper'>
          <img src={four} alt="" />
        </div>
      </Marquee>

    
    </div>
  )
}

export default Partners;
