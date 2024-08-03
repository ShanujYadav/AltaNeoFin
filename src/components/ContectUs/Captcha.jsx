import React, { useState } from 'react'
import { LuRefreshCcw } from "react-icons/lu";


const Captcha = ({ onChange }) => {

  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const [captcha, setCaptcha] = useState(generateRandomString(6))
  const [userInput, setUserInput] = useState('')

  const refreshCaptcha = () => {
    setCaptcha(generateRandomString(6));
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.target.value)
    onChange(e.target.value === captcha)
  }

  return (<>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={captcha}
        readonly
        className="p-2 border border-gray-300 text-center rounded-md shadow-sm w-full font-serif font-bold"
      />
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter CAPTCHA"
        className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
      />
      <div className='cursor-pointer'>
        <LuRefreshCcw
          size={28}
          onClick={refreshCaptcha}
        />
      </div>
    </div>
  </>
  )
}

export default Captcha;