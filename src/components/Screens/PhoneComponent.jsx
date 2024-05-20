import React, { useEffect } from 'react';
import './PhoneComponent.css'; // Import the CSS file

const PhoneComponent = () => {
  useEffect(() => {
    const phone = document.getElementById("phone_1");
    const iframe = document.getElementById("frame_1");

    iframe.onload = function(){
      setTimeout(function() {
          phone.className = "view_1";
          setTimeout(function() {
              phone.className = "view_1 rotate";
              document.getElementById('loader').style.display = 'none';
          }, 1000);
      }, 1000);
    };
  }, []);

  return (
    <div id="phone_1">
      <div id="loader">Loading...</div>
      <iframe src="ALTANEO" id="frame_1"></iframe>
    </div>
  );
}

export default PhoneComponent;
