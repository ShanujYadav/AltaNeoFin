import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";

const Numbers = () => {
  return (
    <>
      <section class="container px-6 py-4 mx-auto">
        <div class="grid gap-6 my-10 px-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <GrProjects size={25} />
            </div>
            <div className='px-6'>
              <p class="mb-2 text-5xl font-semibold text-gray-900">4+</p>
              <p class="text-sm font-normal text-muted text-normal">Products</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <FaUsers size={25} />
            </div>
            <div className='px-6'>
              <p class="mb-2 text-5xl font-semibold text-gray-900">300+</p>
              <p class="text-sm font-normal text-muted text-normal">Costumer Base</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <FaUserCheck size={22} />
            </div>
            <div className='px-6'>
              <p class="mb-2 text-5xl font-semibold text-gray-900">4K+</p>
              <p class="text-sm pl-2 font-normal text-muted text-normal">Followers </p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
              {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg> */}
              <BiRupee size={23}/>

            </div>
            <div className='px-6'>
              <p class="mb-2 text-5xl font-semibold text-gray-900">100M+</p>
              <p class="text-sm pl-2 font-normal text-muted text-normal">Working Capital</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Numbers