import React, { useState } from 'react'
import coverimg from '../../../public/assets/img/cover.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Captcha from './Captcha';
import mapImg from '../../../public/assets/img/mapImg.png'
import Footer from '../Footer/Footer';




const ContactUsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isCaptchaCorrect, setIsCaptchaCorrect] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    console.log('isCaptchaCorrect--', isCaptchaCorrect)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('isCaptchaCorrect:----', isCaptchaCorrect)

        return
        try {
            const response = await sendRequest({
                method: 'POST',
                url: 'http://localhost:8080/submitContactForm',
                data: formData
            })
            console.log(response.data);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            })
            setFormKey(Date.now())
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div className='bg-slate-200'>
            <div className="relative">
                <img src={coverimg} alt="Image" className="w-full h-80 lg:h-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4">
                    <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-serif">Contact Us</span>
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold font-serif text-center">
                        Our team at Altaneofin is here to help! Reach out to us anytime,
                        <br className="hidden sm:block" /> and we'll ensure you get the support you need. Contact us today.
                    </span>
                    <span className="text-white text-xs font-serif">Home &gt; Contact</span>
                </div>
            </div>

            <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0">
                <div class="container xl:max-w-6xl mx-auto px-4">
                    <div class="flex flex-wrap flex-row -mx-4 text-center mt-5">
                        <div className="flex-shrink h-full px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-2 bg-blue-700 rounded-full p-3">
                                    <FaLocationDot color='white' size={20} />
                                </div>
                                <p className="text-sm leading-normal mb-2 font-normal text-black">934, Block-3, Spaze I tech park sector 49, Sohna Road, Gurugram</p>
                            </div>

                        </div>
                        <div className="flex-shrink px-4 h-full max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4 bg-blue-700 rounded-full p-3">
                                    <FaPhoneAlt color='white' size={20} />
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-normal text-black">+91 9817741345</h3>
                            </div>
                        </div>

                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4 bg-blue-700 rounded-full p-3">
                                    <IoMdMail color='white' size={20} />
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-normal text-black">info@altaneofin.in</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="my-5">
                <div className="py-1 sm:py-16 block lg:py-24 relative bg-opacity-50 z-0">

                    <div className="flex flex-col h-[25rem] md:flex-row justify-between items-start mt-10 mx-auto max-w-5xl">
                        <div className="flex-1 h-[25rem] bg-white rounded-lg text-gray-700 md:mr-6 mb-6 md:mb-0">
                            <img src={mapImg} alt="" className='h-full' />
                        </div>

                        <div className="flex-1 p-6 bg-white rounded-lg w-full">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        autoComplete="given-name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 bg-slate-100 rounded-sm text-black"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 bg-slate-100 rounded-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder='Phone'
                                        autoComplete="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300 bg-slate-100 rounded-sm"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100 rounded-sm"
                                    ></textarea>
                                </div>
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center py-2 px-3 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-normal text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={isLoading}
                                    >Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactUsPage