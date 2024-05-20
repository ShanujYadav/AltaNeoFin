import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './Numbers.css';

const Numbers = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const numberRefs = Array.from(document.querySelectorAll('.number')).map(element => {
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(element);
      return { element, observer };
    });

    return () => {
      numberRefs.forEach(({ element, observer }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('count-up-visible');
      } else {
        entry.target.classList.remove('count-up-visible');
      }
    });
  };

  return (
    <div className='numbers'>
      <h1 className='heading'>Our Numbers</h1>
      <div className='number'>
        <CountUp end={1} duration={90} redraw={true} className='count-up' />
        <div>Our Customers</div>
      </div>
      <div className='number'>
        <CountUp end={100000000} duration={80} redraw={true} prefix="INR" separator="," className='count-up' />
        <div>Over 100 Cr in accelerated early payments</div>
      </div>
      <div className='number'>
        <CountUp end={1} duration={90} redraw={true} className='count-up' />
        <div>In Large institutions  </div>
      </div>
    </div>
  );
};

export default Numbers;
