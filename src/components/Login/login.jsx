import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getLogin } from '../../store/slice/ProfileSlice';
import { toast } from 'react-toastify';
import Anlogo from '../../../public/assets/logo/Anlogo.jpg'


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
    setShowError({ ...showError, mobile: false, warning: false })
    const enteredMobile = e.target.value.replace(/\D/g, '').slice(0, 10)
    setData({ ...data, mobile: enteredMobile })
  }

  const onChangeOTP = (e) => {
    setShowError({ ...showError, otp: false, warning: false })
    const enteredOtp = e.target.value.replace(/\D/g, '').slice(0, 6)
    setData({ ...data, otp: enteredOtp })
  }


  const onSendOTP = async (e) => {
    e.preventDefault()
    if (!data.mobile || data.mobile.length < 10) {
      toast.error('Enter a Valid Phone Number')
      return
    }
    try {
      let phone = '+91 ' + data.mobile
      console.log('phone---', phone)
      const response = await fetch(`${baseUrl}/sendOtp?mobileNumber=${phone}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      console.log('sendOtp res---', res)
      if (res.statusCode === 200) {
        setShowOtpInput(true)
      }
      else{
        toast.error(res.error)
      }
    }
    catch (e) {
      console.log(e);
    }
  }



  const onVerifyOTP = async (e) => {
    e.preventDefault()
    if (!data.otp || data.otp.length < 6) {
      toast.error('Enter a Valid OTP')
      return
    }
    try {
      const OTP = data.otp
      const response = await fetch(`${baseUrl}/verifyOtp?otp=${OTP}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      if (res.statuscode == 200) {
        // sessionStorage.setItem("phone", "Smith")
        //     // sessionStorage.setItem("uuid", "Smith")

        //     dispatch(getLogin(res))
        //     // history.push("/dashboard/home")
        //     // history.push(`/Dashboard/?agentId=${id}`)
        //   }
      }
      else{
        toast.error(res.error)
      }
    } catch (e) {
      console.log(e)
    }


    //  else {
    //   const OTP = data.otp
    //   const response = await fetch(`${baseUrl}/verifyOtp?otp=${OTP}`, {
    //     method: 'POST',
    //     headers: { 'Content-type': 'application/json' }
    //   })
    //   const res = await response.json()
    //   if (res.statusCode === 200) {
    //     // sessionStorage.setItem("phone", "Smith")
    //     // sessionStorage.setItem("uuid", "Smith")

    //     dispatch(getLogin(res))
    //     // history.push("/dashboard/home")
    //     // history.push(`/Dashboard/?agentId=${id}`)
    //   }
    //   else {
    //     setShowError({ ...showError, warning: true })
    //   }
    // }
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-white lg:p-0 relative">
        <div className="relative w-full h-full lg:h-full overflow-hidden flex items-center justify-center">
          <h1 className="absolute top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-black text-3xl sm:text-4xl lg:text-5xl font-serif font-bold z-10 whitespace-nowrap">
            ALTANEO
          </h1>
          <img
            src={Anlogo}
            alt="Background"
            className="absolute top-32 lg:top-24 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-white p-4 lg:p-8">
        <h2 className="font-semibold text-2xl lg:text-3xl mb-4 text-center">
          Login To Be AltaNeofied
        </h2>
        <form
          onSubmit={onSendOTP}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center"
        >
          <input
            type="tel"
            placeholder="Phone Number"
            value={data.mobile}
            onChange={onChangeMobile}
            className={`form-control w-full max-w-xs p-2 mb-4 border ${showError.mobile ? 'border-red-500' : 'border-gray-300'
              } rounded-full`}
          />
          {!showOtpInput && (
            <button
              type="submit"
              className="bg-blue-500 text-white px-12 py-2 rounded-full w-72"
            >
              Send OTP
            </button>
          )}
        </form>
        {showOtpInput && (
          <form
            onSubmit={onVerifyOTP}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-4"
          >
            <input
              type="tel"
              maxLength="6"
              placeholder="Enter OTP"
              value={data.otp}
              onChange={onChangeOTP}
              className={`form-control w-full p-2 mb-4 border ${showError.otp ? 'border-red-500' : 'border-gray-300'
                } rounded`}
            />
            {showError.warning && (
              <div
                className="flex items-center p-2 mb-4 text-sm text-red-800 border border-red-600 rounded-lg bg-red-50"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span className="font-medium">Invalid Credentials!</span>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>


    // <div className={styles.loginContainer}>
    //   <VideoContainer />

    //   <div className={styles.loginFormContainer}>
    //     <h2 className='font-semibold text-3xl'>Login To Be Altaneofied</h2>
    //     {/* <div className={styles.loginTypeButtons}>
    //       <button className={loginType === 'mobile' ? styles.active : ''} onClick={() => handleLoginTypeChange('mobile')}>All You Need Is Mobile</button>
    //     </div> */}

    //     <form onSubmit={onSendOTP} className={styles.loginForm}>
    //       <input type="tel"
    //         placeholder="Phone Number"
    //         value={data.mobile}
    //         onChange={onChangeMobile}
    //         className={showError.mobile ? 'form-control is-invalid' : 'form-control'}
    //       />
    //       {!showOtpInput && <button type="submit">Send OTP</button>}
    //     </form>

    //     {showOtpInput && (
    //       <form onSubmit={onVerifyOTP} className={styles.loginForm}>
    //         <input type="tel"
    //           maxLength="6"
    //           placeholder="Enter OTP"
    //           value={data.otp}
    //           onChange={onChangeOTP}
    //           className={showError.otp ? 'form-control is-invalid' : 'form-control'}
    //         />
    //          {showError.warning && (
    //           <div class="flex items-center p-2 mb-4 my-2 text-sm text-red-800 border border-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
    //             <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    //             </svg>
    //             <div>
    //               <span class="font-medium">Invalid Credentials!</span>
    //             </div>
    //           </div>
    //         )}
    //         <button type="submit">Verify OTP</button>
    //       </form>
    //     )}
    //   </div>
    // </div>

  );
};

export default Login;
