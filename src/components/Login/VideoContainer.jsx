// VideoContainer.jsx

import React from 'react';
import styles from './login.module.css'; // Import CSS module
import loginpage from '../../assets/loginpagev.mp4';

const VideoContainer = () => {
  return (
    <div className={styles.videoContainer}>
    <video autoPlay loop muted className="background-video">
  <source src={loginpage} type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default VideoContainer;
