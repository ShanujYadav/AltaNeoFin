import React from 'react'
import { IoIosVideocam } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";




const RmBox = () => {
    const phoneNumber = "9817741345";
    const message = "Hello, I have an inquiry about..."

    const onWhatsAppClick = () => {
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    const onMeetClick = () => {
        console.log('onMeetClick clicked')
    }

    return (
        <div className="flex flex-col sm:items-center sm:space-x-2 mt-4 sm:mt-0 space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-base sm:mb-0 mb-2">Ask your queries and doubts on</p>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <button className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md"
                    onClick={onWhatsAppClick}>
                    <IoLogoWhatsapp className='mr-2'/>
                    On WhatsApp
                </button>
                <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-md" onClick={onMeetClick}>
                    <IoIosVideocam className='mr-2'/>
                    Schedule a Meet
                </button>
            </div>
        </div>
    )
}
export default RmBox