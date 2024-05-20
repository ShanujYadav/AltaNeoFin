import React from 'react';
import './CreditCardService.css'; // Import the CSS file

const CreditCardService = () => {
  return (
    <div className="swipe-animation">
      <div className="credit-card">
        <div className="scc-tripe"></div>
      </div>
      <div className="swiper-top"></div>
      <div className="swiper-bottom">
        <div className="light-indicator"></div>
      </div>
    </div>
  );
}

export default CreditCardService;
