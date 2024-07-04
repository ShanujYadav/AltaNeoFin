import React from 'react';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';

import axis from '../../../public/assets/logo/Axis.png'
import hdfc from '../../../public/assets/logo/hdfc.png';
import icici from '../../../public/assets/logo/icici.png';
import cisco from '../../../public/assets/logo/cisco.png';
import idfc from '../../../public/assets/logo/idfc.png';



const Investors = () => {
  
  return (
    <div class="marquee-container py-5 px-20">
      <Marquee direction="right">
        <div class="mx-7 sm:mx-5">
          <img src={axis} alt="Axis Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
        <div class="mx-7 sm:mx-5">
          <img src={hdfc} alt="HDFC Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
        <div class="mx-7 sm:mx-5">
          <img src={icici} alt="ICICI Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
        <div class="mx-7 sm:mx-5">
          <img src={idfc} alt="ICICI Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
        <div class="mx-7 sm:mx-5">
          <img src={cisco} alt="Cisco Logo" class="w-4/5 sm:max-w-xs" />
        </div>
      </Marquee>
    </div>
  )
}

export default Investors;
