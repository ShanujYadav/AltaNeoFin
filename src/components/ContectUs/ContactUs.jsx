import React, { useState } from 'react';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const [isLoading,setIsLoading]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await sendRequest({
        method: 'POST',
        url: 'http://localhost:8080/submitContactForm',
        data: formData
      });

      console.log(response.data);
      setFormData({
        name: '',
        phone: '', 
        email: '',
        message: ''
      })  
      setFormKey(Date.now())
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <section class="lg:my-5">
    <div class="py-1  sm:py-16 block lg:py-24 relative bg-opacity-50 z-0" >
        <h2 className='text-black text-center	font-semibold font-serif text-3xl mt-4 underline'>Contact Us</h2>
    <div className="flex flex-col md:flex-row justify-between items-start mt-10 mx-auto max-w-5xl">
        <div className="flex-1 p-6 bg-gray-100 rounded-lg text-gray-700 md:mr-6 mb-6 md:mb-0">
        <h3 className="text-2xl font-semibold flex items-center text-black mb-2 font-serif">
          Send us a message <img src={msg_icon} alt="Message Icon" className="ml-2 w-5 h-5" />
        </h3>
        <p className="mt-1 text-base text-gray-600 mb-6">
          Zero paper work.<br />
          Instant approval.<br />
          Real-time bill settlement.<br />
          Improved customer retention.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <img src={mail_icon} alt="Mail Icon" className="mr-2 w-4 h-4" /> info@altaneofin.in
          </li>
          <li className="flex items-center">
            <img src={phone_icon} alt="Phone Icon" className="mr-2 w-4 h-4" /> +91 9817741345
          </li>
          <li className="flex items-start">
            <img src={location_icon} alt="Location Icon" className="mr-2 w-4 h-4" />
            <div>
              934, Block-3, Spaze I tech park <br />
              sector 49, Sohna Road, Gurugram
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-gray-100 rounded-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ContactUs