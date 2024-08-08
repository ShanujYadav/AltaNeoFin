import React, { useState } from 'react';
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Captcha from './Captcha';
import { toast } from 'react-toastify';


let contactUrl = import.meta.env.VITE_CONTACT_URL


const ContactUs = () => {
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false)
  const [showCaptchaError, setShowCapctaError] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onChangeCaptcha = (value) => {
    console.log(value);

    setIsCaptchaCorrect(value)
    setShowCapctaError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isCaptchaCorrect) {
      setShowCapctaError(true)
      return
    }

    try {
      let body = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      }
      console.log('body---', body)
      const response = await fetch("http://ec2-3-108-191-244.ap-south-1.compute.amazonaws.com:8080/submitContactForm", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" }
      })
      const res = await response.json()
      console.log('response-----', res)

      if (res) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
        toast.success('Thank You!')
        return
      }
    } catch (error) {
      console.error('Err:', error)
    }
  }

  return (
    <section className="lg:my-5">
      <div className="py-1 sm:py-16 block lg:py-24 relative bg-opacity-50 z-0">
        <h2 className="text-black text-center font-semibold font-serif text-3xl mt-4 underline">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-start mt-10 mx-auto max-w-5xl">
          <div className="flex-1 p-6 bg-gray-100 rounded-lg text-gray-700 md:mr-6 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold flex items-center text-black mb-2 font-serif">
              Send us a message
            </h3>
            <p className="mt-1 text-base text-gray-600 mb-6">
              Zero paper work.<br />
              Instant approval.<br />
              Real-time bill settlement.<br />
              Improved customer retention.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                < IoMailSharp className='mr-2' color='blue' size={20} />
                info@altaneofin.in
              </li>
              <li className="flex items-center">
                <FaPhoneAlt color='blue' className='mr-1' />
                +91 9817741345
              </li>
              <li className="flex items-start">
                <MdLocationPin color='blue' size={22} />
                <div>
                  934, Block-3, Spaze I tech park <br />
                  sector 49, Sohna Road, Gurugram
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-6 bg-gray-100 rounded-lg w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="given-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder='Phone Number'
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>

              <Captcha onChange={onChangeCaptcha} />
              <div className="flex justify-end">
                {showCaptchaError ? (
                  <small className="text-red-500 mt-2">CAPTCHA is incorrect.</small>
                ) : (
                  <>
                  </>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSubmit}
                >Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUs