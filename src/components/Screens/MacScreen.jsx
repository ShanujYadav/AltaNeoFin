// MacScreen.jsx
import React, { useRef } from 'react';
import './MacScreen.css';

const MacScreen = () => {
  const deviceRef = useRef(null);
  const ROTATION = 10;

  const handleMove = (e) => {
    const { clientX, clientY, currentTarget } = e;

    const rect = currentTarget.getBoundingClientRect();

    let horizontal = (clientX - rect.left) / rect.width;
    let vertical = (clientY - rect.top) / rect.height;

    horizontal = (0.5 - horizontal) * ROTATION;
    vertical = (0.5 - vertical) * -ROTATION;

    const rotateX = horizontal.toFixed(2);
    const rotateY = vertical.toFixed(2);

    deviceRef.current.style.transform = `perspective(${rect.width}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  const handleLeave = () => {
    deviceRef.current.style.transform = "none";
  };

  return (
    <div className="wrapper">
      <div className="hover" onMouseMove={handleMove} onTouchMove={handleMove} onMouseLeave={handleLeave}>
        <div className="image-container" ref={deviceRef}>
          <img className="device" src="https://iili.io/HLEhQaV.png" alt="Laptop" />
          <img className="screen" src="https://iili.io/HLEkH2j.png" alt="UI/UX Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default MacScreen;
