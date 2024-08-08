import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getLogin } from '../../store/slice/ProfileSlice';
import { toast } from 'react-toastify';
import Anlogo from '../../../public/assets/logo/Anlogo.jpg'


let baseUrl = import.meta.env.VITE_SOME_KEY

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [showOtpInput, setShowOtpInput] = useState(false)

useEffect(()=>{
  sessionStorage.clear()
},[])

  const [data, setData] = useState({
    mobile: '',
    otp: ''
  })
  
  const onChangeMobile = (e) => {
    const enteredMobile = e.target.value.replace(/\D/g, '').slice(0, 10)
    setData({ ...data, mobile: enteredMobile })
  }

  const onChangeOTP = (e) => {
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
      let phone = '91' + data.mobile
      console.log('phone---', phone)
      const response = await fetch(`${baseUrl}/sendOtp?mobileNumber=${phone}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      console.log('sendOtp res---', res)
      if (res.statusCode === 200) {
        toast.success(res.message)
        setShowOtpInput(true)
      }
      else {
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
      const otp = data.otp
      const phone = '91' + data.mobile
      console.log('phone---', phone, "Otp--", otp);
      const response = await fetch(`${baseUrl}/verifyOtp?mobileNumber=${phone}&otp=${otp}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' }
      })

      const res = await response.json()
      console.log('opt verify--- ', res)

      if (res.statusCode == 200) {
        toast.success(res.status)
        sessionStorage.setItem("phone", res.mobileNumber)
        sessionStorage.setItem("uuid", res.uuid)
        history.push("/dashboard/home")
        // dispatch(getLogin(res))
        setData({
          mobile: '',
          otp: '',
        })
      }
      else {
        toast.error(res.message)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-white lg:p-0 relative">
        <div className="relative w-full h-full lg:h-full overflow-hidden flex items-center justify-center">
          <h1 className="absolute top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-6xl sm:text-4xl lg:text-5xl font-serif font-bold z-10 whitespace-nowrap bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent"
          >
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
        <h2 className="font-semibold text-2xl lg:text-3xl mb-4 text-center bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
          Login To Be AltaNeofied
        </h2>

        {!showOtpInput && (
          <form
            onSubmit={onSendOTP}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center"
          >
            <input
              type="tel"
              placeholder="Phone Number"
              value={data.mobile}
              onChange={onChangeMobile}
              className='form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full' />

            <button
              type="submit"
              className="bg-blue-500 text-white px-12 py-2 rounded-full w-72"
            >
              Send OTP
            </button>

          </form>
        )}

        {showOtpInput && (
          <form
            onSubmit={onVerifyOTP}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center"
          >
            <input
              type="tel"
              maxLength="6"
              placeholder="Enter OTP"
              value={data.otp}
              onChange={onChangeOTP}
              className='form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full' />
            <button
              type="submit"
              className="bg-blue-500 text-white px-12 py-2 rounded-full w-72"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
