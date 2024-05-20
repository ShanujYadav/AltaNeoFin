import React, { useState } from 'react';
import styles from './login.module.css';
import VideoContainer from './VideoContainer';

const Login = () => {
  const [data, setData] = useState({
    mobile:'',
    otp:'',
  });

  
  const [otp, setOtp] = useState('');

  const [showOtpInput, setShowOtpInput] = useState(false);

  const [showError, setShowError] = useState({
    mobile:false,
    otp:false,
  })

  const onChangeMobile = (e) => {
    const enteredMobile = e.target.value.replace(/\D/g, '').slice(0, 10) 
    setData({ ...data, mobile:enteredMobile})
    };


  const onChangeOTP = (e) => {
    const enteredOtp = e.target.value.replace(/\D/g, '').slice(0, 6)
    setData({ ...data, otp:enteredOtp  })
  }


  const onSendOTP = (e) => {
    e.preventDefault();
    console.log(data)
    setShowOtpInput(true);
  }

  const onVerifyOTP = (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp);
    setOtp('');
  };


  return (
    <div className={styles.loginContainer}>
      <VideoContainer />
      <div className={styles.loginFormContainer}>
        <h2>Login To Be Altaneofied</h2>
        {/* <div className={styles.loginTypeButtons}>
          <button className={loginType === 'mobile' ? styles.active : ''} onClick={() => handleLoginTypeChange('mobile')}>All You Need Is Mobile</button>
        </div> */}

        <form onSubmit={onSendOTP} className={styles.loginForm}>
          <input type="tel"
          placeholder="Phone Number" 
          value={data.mobile} 
          onChange={onChangeMobile}
          className={showError.mobile ? 'form-control is-invalid' : 'form-control'}
          />
          {!showOtpInput && <button type="submit">Send OTP</button>}
        </form>

        {showOtpInput && (
          <form onSubmit={onVerifyOTP} className={styles.loginForm}>
            <input type="tel" 
            maxLength="6" 
            placeholder="Enter OTP" 
            value={data.otp}
            onChange={onChangeOTP}
            className={showError.otp ? 'form-control is-invalid' : 'form-control'}
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
