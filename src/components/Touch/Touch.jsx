import React, { useState } from 'react';
import useApi from './useApi';
import './Touch.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Touch = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [formKey, setFormKey] = useState(Date.now()); // Key to force re-render

  const { isLoading, error, sendRequest } = useApi();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      });
      setFormKey(Date.now()); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-0 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-blue-950 md:col-span-4 p-6 text-white">
          <h3 className="text-2xl sm:text-4xl leading-normal font-extrabold tracking-tight font-serif">
            Get In Touch
          </h3>
          <p className="mt-2 leading-7 text-base text-gray-200">
            Zero paper work.
          </p>
          <p className="mt-1 leading-7 text-base text-gray-200">
            Instant approval.
          </p>
          <p className="mt-1 leading-7 text-base text-gray-200">
            Real-time bill settlement.
          </p>
          <p className="mt-1 leading-7 text-base text-gray-200">
            Improved customer retention.
          </p>

          <div className="flex items-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="mr-2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-sm">934, Block-3, Spaze i-Tech park sector-49, Sohna Road, Gurugram</span>
          </div>
          
          <div className="flex items-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.27c1.12.45 2.33.7 3.59.7a1 1 0 011 1v3.59c0 .55-.45 1-1 1-10.52 0-19-8.48-19-19 0-.55.45-1 1-1H6a1 1 0 011 1c0 1.26.25 2.47.7 3.59.14.34.05.73-.27 1.11l-2.2 2.2z" />
            </svg>
            <span className="text-sm">+91 9817741345</span>
          </div>

          <div className="flex items-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-sm">info@example.com</span>
          </div>

        </div>
        <div className="md:col-span-8 p-6 bg-white">
          <form key={formKey} onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Touch