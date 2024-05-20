import React from 'react';
import './Solutions.css';
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Solutions = () => {
  return (
    <div className='text-center'>
      <h4></h4>
    <div className='solutions container'>
      <div className='solution'>
        <img src={program_1} alt="" />
        <div className='caption'>
          <img src={program_icon_1} alt="" />
          <p className='text-white'>Structured B2B marketplace for trade facilitation along with supply chain financing and trade intermediation.</p>
        </div>
      </div>
      <div className='solution'>
        <img src={program_2} alt="" />
        <div className='caption'>
          <img src={program_icon_2} alt="" />
          <p className='text-white'>Access to diverse range of lending solutions such as Invoice Discounting, Purchase Order Financing, Pre-invoice Financing.</p>
        </div>
      </div>
      <div className='solution'>
        <img src={program_3} alt='' />

        <div className='caption'>
          <img src={program_icon_3} alt="" />
          <p className='text-white'>Simpler, faster, better B2B payments and automated reconciliation for high impact business processes.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Solutions
