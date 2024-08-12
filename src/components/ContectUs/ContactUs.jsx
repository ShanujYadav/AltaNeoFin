// import React from "react";

// const ContactUs = () => {
//   return(
//     <>
//     <div class="flex min-h-screen items-center justify-center">
//   <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//     <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
//       <img
//         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
//         alt="image"
//         class="h-full w-full object-cover"
//       />
//     </div>
//     <div class="p-6">
//       <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
//         startups
//       </h6>
//       <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//         Lyft launching cross-platform service this week
//       </h4>
//       <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
//         Like so many organizations these days, Autodesk is a company in
//         transition. It was until recently a traditional boxed software company
//         selling licenses. Yet its own business model disruption is only part of
//         the story
//       </p>
//       <a class="inline-block" href="#">
//         <button
//           class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//           type="button"
//         >
//           Learn More
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="2"
//             stroke="currentColor"
//             aria-hidden="true"
//             class="h-4 w-4"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             ></path>
//           </svg>
//         </button>
//       </a>
//     </div>
//   </div>
// </div>
// <div class="flex items-center justify-center">
//     <div class="text-sm text-gray-700 py-1">
//         Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
//     </div>
// </div>
//     </>
//   )
// }
// export default ContactUs









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

      const response = await fetch(`${contactUrl}/submitContactForm`, {
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