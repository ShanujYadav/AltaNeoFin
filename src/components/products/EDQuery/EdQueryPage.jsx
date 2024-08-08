import React, { useState, useRef } from 'react';
import Topbar from '../../common/Topbar';
import Footer from '../../Footer/Footer';
import { useHistory } from 'react-router-dom';
import vid from '../../../../public/assets/vid/vid.mp4';
import Numbers from '../../common/Numbers';
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";



const EDQueryPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory()


  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }

  const handleNavigation = (path) => {
    history.push(path)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-16 p-6 sm:p-0">
        <Topbar
          title="ED Query Solutions"
          desc="We have one-stop solution for all your ED (Enforcement Directorate) notice-related matters. For more information contact us directly."
          from="Home &gt; Products"
          to="ED Query"
        />
        <section className="lg:py-4 w-full">
          <div className="container p-4 mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col items-center justify-start text-center">
              <h2 className="text-blue-500 text-base mt-2 font-semibold">Services</h2>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 text-center md:text-left">What We Offer
                <br />for services
              </h1>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-2">
                  < TbHandClick size={27} color='green'/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">One-stop Solution</h3>
                <p className="text-gray-600 text-base text-center">We are delighted to offer a single-stop solution for managing all your ED (Enforcement Directorate) notice matters.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-2">
                  <FaUsers size={27} color='blue'/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Expert Team</h3>
                <p className="text-gray-600 text-base text-center">Our team includes high-level experience, including former commissioners and top bureaucrats who have successfully handled high-profile cases.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-2">
                <IoSearchSharp color='red' size={27}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Transparency</h3>
                <p className="text-gray-600 text-base text-center">Our commitment to transparency guarantees clear communication and trust in all our interactions.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <div className="bg-yellow-100 p-4 rounded-full mb-2">
                  <FaUserTie size={27} color='black'/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Legal Advisory</h3>
                <p className="text-gray-600 text-base text-center">Our legal advisory services provide expert guidance to navigate complex legal matters with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        <Numbers />
        <div className="flex items-center justify-center  h-112 md:h-128 mb-4 mt-20 w-full px-4 md:px-0">
          <div className="w-full md:w-3/4 lg:w-2/3  bg-white">
            <video
              ref={videoRef}
              className="w-full h-full rounded-2xl object-cover"
              controls
              onClick={handlePlayPause}
              >
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="py-8 bg-gray-100 text-center w-full">
          <h2 className="text-5xl font-bold mt-4 mb-2">Products</h2>
          <p className="max-w-md mx-auto text-base mb-4">
            Take a moment to browse our additional products          </p>
          <div className="flex flex-wrap justify-center space-x-2">
            <button
              onClick={() => handleNavigation('/products')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              See All
            </button>
            <button
              onClick={() => handleNavigation('/products/vendorFinancing')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              Vendor Financing
            </button>
            <button
              onClick={() => handleNavigation('/products/invoiceDiscounting')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              Invoice Discounting
            </button>
            <button
              onClick={() => handleNavigation('/products/exportCredits')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              Export Credits
            </button>
            <button
              onClick={() => handleNavigation('/products/creditCard')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              Credit Card
            </button>
          </div>
        </div>
      </div>
      <Footer className="w-full" />
    </>
  );
}

export default EDQueryPage;



// import React from 'react'
// import Topbar from '../../common/Topbar'
// import Footer from '../../Footer/Footer'
// import Numbers from '../../common/Numbers'

// const EdQueryPage = () => {
//   return (
//     <div>
//         <Topbar
//         title="ED Query Solutions"
//         desc="We have one-stop solution for all your ED (Enforcement Directorate) notice-related matters. For more information contact us directly."
//         from="Home &gt; Products"
//         to="ED Query"
//         />
//         <Numbers/>
//         <Footer/>
//     </div>
//   )
// }

// export default EdQueryPage