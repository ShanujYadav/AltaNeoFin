import React, { useState } from 'react';
import styles from './login.module.css';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getLogin } from '../../store/slice/ProfileSlice';
import { toast } from 'react-toastify';

let baseUrl = import.meta.env.VITE_SOME_KEY

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [showOtpInput, setShowOtpInput] = useState(false);

  const [data, setData] = useState({
    mobile: '',
    otp: '',
  })

  const [showError, setShowError] = useState({
    mobile: false,
    otp: false,
    warning: false,
  })

  const onChangeMobile = (e) => {
    setShowError({ ...showError, mobile: false,warning:false })
    const enteredMobile = e.target.value.replace(/\D/g, '').slice(0, 10)
    setData({ ...data, mobile: enteredMobile })
  }

  const onChangeOTP = (e) => {
    setShowError({ ...showError, otp: false, warning:false})
    const enteredOtp = e.target.value.replace(/\D/g, '').slice(0, 6)
    setData({ ...data, otp: enteredOtp })
  }

  
  const onSendOTP = async (e) => {
    e.preventDefault()
    toast.error('All Fields Are Required !')
    return

    if (data.mobile.length < 10) {
      setShowError({ ...showError, mobile: true })
    }
    else {
      let phone = '+91 ' + data.mobile
      const response = await fetch(`${baseUrl}/sendOtp?mobileNumber=${phone}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      console.log('res---', res)
      if (res.statusCode === 200) {
        setShowOtpInput(true)
      }
    }
  }

  const onVerifyOTP = async (e) => {
    e.preventDefault()
    if (data.otp.length < 6) {
      setShowError({ ...showError, otp: true })
    } else {
      const OTP = data.otp
      const response = await fetch(`${baseUrl}/verifyOtp?otp=${OTP}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      if (res.statusCode === 200) {
        dispatch(getLogin(res))
        // history.push("/Dashboard")
        let id=res.uuid
        history.push(`/Dashboard/?agentId=${id}`)
      }
      else{
        setShowError({ ...showError, warning: true })
      }
    }
  }

  return (
    <div className={styles.loginContainer}>
      <VideoContainer />
      <div className={styles.loginFormContainer}>
        <h2 className='font-semibold text-3xl'>Login To Be Altaneofied</h2>
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
             {showError.warning && (
              <div class="flex items-center p-2 mb-4 my-2 text-sm text-red-800 border border-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span class="font-medium">Invalid Credentials!</span>
                </div>
              </div>
            )}
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
