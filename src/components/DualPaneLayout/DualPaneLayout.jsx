import React from 'react';
import './DualPaneLayout.css'; // Import the CSS file
import PhoneComponent from '../Screens/PhoneComponent';
import CreditCardService from '../Services/CreditCardService';


const DualPaneLayout = () => {
  return (
    <div className="dual-pane-container">
      <div className="left-pane">
        <PhoneComponent/>
      </div>
      <div className="right-pane">
<CreditCardService/>
      </div>
    </div>
  );
}

export default DualPaneLayout;
