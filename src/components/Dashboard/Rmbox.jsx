import React, { useEffect, useState } from 'react';
import './Rmbox.css';
let baseUrl = import.meta.env.VITE_SOME_KEY

const Rmbox = () => {
  const [rmData, setrmData] = useState({
    name: 'Hi,',
    img: 'https://www.w3schools.com/howto/img_avatar.png',
    contactLink: 'https://wa.me/9817741345',
    meetingLink: 'kkkk',
    message: 'How can i Help You',
    isOnline: false,
  })





  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await fetch(`${baseUrl}/api/relationship-managers/1`, {
  //         method: 'GET',
  //         headers: { 'Content-type': 'application/json' }
  //       })
  //       const res = await response.json()
  //       console.log('res----', res)
  //       setrmData({
  //         ...rmData,
  //         name: res.name,
  //         contactLink: res.contactLink,
  //         meetingLink: res.meetingLink,
  //         message: res.message,
  //         isOnline: res.online,
  //       })
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // }, [])



  const onClickWapp = () => {
    console.log('wapp clicked------');
  }

  const onClickMeet = () => {
    console.log('wapp clicked------');
  }
  return (
    <div class="flex flex-col sm:items-center sm:space-x-2 mt-4 sm:mt-0 space-y-2 sm:space-y-0">
      <p class="text-gray-500 text-base sm:mb-0 mb-2">Ask your queries and doubts on</p>
      <div class="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <button class="flex items-center bg-green-500 text-white px-2 py-1 rounded-md"
          onClick={onClickWapp}>
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm.225 17.025l-5.68-5.68 1.502-1.502 4.179 4.179 7.697-7.697 1.502 1.502-9.2 9.198z" />
          </svg>
          On WhatsApp
        </button>
        <button class="flex items-center bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={onClickMeet}>
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-3.55 19.383c.562.104.768-.242.768-.539v-1.968c-3.117.678-3.772-1.505-3.772-1.505-.511-1.299-1.246-1.644-1.246-1.644-1.019-.696.078-.683.078-.683 1.125.08 1.719 1.156 1.719 1.156 1.003 1.718 2.631 1.222 3.272.934.102-.727.393-1.222.716-1.504-2.486-.28-5.103-1.243-5.103-5.537 0-1.223.437-2.222 1.156-3.007-.12-.282-.502-1.419.102-2.96 0 0 .945-.301 3.094 1.148a10.765 10.765 0 012.813-.383 10.782 10.782 0 012.813.383c2.149-1.449 3.094-1.148 3.094-1.148.605 1.541.222 2.678.102 2.96.72.785 1.156 1.784 1.156 3.007 0 4.307-2.623 5.252-5.117 5.524.405.348.764 1.034.764 2.086v3.097c0 .301.206.646.77.539A10 10 0 0012 2z" />
          </svg>
          Schedule a Meeting
        </button>
      </div>
    </div>
  )
}

export default Rmbox