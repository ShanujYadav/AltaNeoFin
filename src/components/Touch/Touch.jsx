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

  const { isLoading, error, sendRequest } = useApi();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p> Zero paper work.<br />
          Instant approval.<br />
          Real-time bill settlement.<br />
          Improved customer retention.</p>
        <ul>
          <li><img src={mail_icon} alt="" />info@altaneofin.in</li>
          <li><img src={phone_icon} alt="" />+91  9817741345</li>
          <li><img src={location_icon} alt="" /><b></b>GURUGRAM <br />934, Block-3, Spaze I tech park Altaneo-wing, <br />sector 49,Sohna Road ,Gurugram</li>
          {/* <li><img src={location_icon} alt=""/>DELHI<br/> RU block, Pitampura, Delhi, 110034</li> */}
        </ul>
      </div>
      <div className='contact-form'></div>
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' value={formData.phone} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange} required />
        <label>Write your message</label>
        <textarea name="message" rows="6" placeholder='Enter your message' value={formData.message} onChange={handleChange} required></textarea>
        <button type='submit' className='btn dark-btn' disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit now'} <img src={white_arrow} alt="" />
        </button>
      </form>
    </div>
  )
}

export default Touch;
