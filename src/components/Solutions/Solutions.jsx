import React from 'react';
import { PiHandshakeLight } from "react-icons/pi";
import { FaRegFileLines } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";


const Solutions = () => {
  return (
<section class=" bg-blue-950">
      <div class="py-1 sm:py-16 block lg:py-24 relative bg-opacity-50">
        <h2 className='text-white text-center	font-semibold font-serif text-3xl mt-4 underline'>What We Offer</h2>
        <div class="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20 z-0">
              <a href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-600  hover:shadow-xl m-2 p-4 relative group  ">
                <div
                  class=" absolute  bg-blue-600/50 top-0 left-0 w-full h-2 transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative">
                  <FaRegFileLines size={70} color='#787FF1' />
                  <h3 class="mt-8 text-lg font-semibold hover:text-red-500 text-black underline ">Invoice Discounting</h3>
                  <p class="mt-4 text-base text-gray-600 ">
                    Structured B2B marketplace for trade facilitation along with supply chain financing and trade intermediation.
                  </p>
                </div>
              </a>
              
              <a href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative group  ">
                <div
                  class=" absolute  bg-blue-500/50 top-0 left-0 w-full h-2 transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative">
                  <PiHandshakeLight size={80} color='#787FF1' />
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white underline">Vendor Financing</h3>
                  <p class="mt-4 text-base text-gray-600">
                    Access to diverse range of lending solutions such as Invoice Discounting, Purchase Order Financing, Pre-invoice Financing.
                  </p>
                </div>
              </a>

              <a href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative  group  ">
                <div
                  class=" absolute  bg-blue-500/50 top-0 left-0 w-full h-2 transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                </div>
                <div class="py-2 px-9 relative">
                  <TbFileExport size={80} color='#787FF1' />
                  <h3 class="mt-8 text-lg font-semibold text-black underline" >Export Credits</h3>
                  <p class="mt-4 text-base text-gray-600 ">
                    Amet minim mollit non
                    deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Solutions