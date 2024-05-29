import React from 'react'
import RightContent from '../RightContent'
import file from '../../../assets/vector/file-vector-png.png'

import { FaFile } from "react-icons/fa";


const CompletedKyc = () => {

  return (
    <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
      <div class="bg-white min-h-[80vh] shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">

        <div class="relative w-4/12 h-40 flex flex-grow ! flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-blue-500 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[100px] w-20 flex-row items-center">
            <div class="rounded-full bg-lightPrimary dark:bg-black">
              <FaFile
              className="h-20 w-20"
              />
              <p class="font-dm text-sm font-medium text-white">Apply for New Loan</p>
            </div>
          </div>
        </div>



        <div class="relative h-40 flex flex-grow ! flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-blue-500 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="ml-[18px] flex h-[100px] w-20 flex-row items-center">
           kknjkn
          </div>
        </div>


        <div class=" block py-8 pt-6 px-4">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">User ID</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Date</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">123456</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">+106420637</div>
                  </td>
                  <td
                    class="px-6 py-3 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    September 12
                  </td>
                  <td class="px-6 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-yellow-800 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs ">Pending</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <RightContent />
    </div>
  )
}
export default CompletedKyc



{/* <table class="w-full my-0 align-middle text-dark border-neutral-200">
              <thead class="align-bottom">
                <tr class="font-semibold text-[0.95rem] text-secondary-dark bg-light">
                  <th class="pb-3 text-start min-w-[175px]">User Id</th>
                  <th class="pb-3 text-end min-w-[100px]">Phone</th>
                  <th class="pb-3 pr-12 text-end min-w-[175px]">Apply Date</th>
                  <th class="pb-3 pr-12 text-end min-w-[100px]">Status</th>
                </tr>
              </thead>
              <hr />
              <tbody>
                <tr class="border-b border-dashed last:border-b-0">
                  <td class="p-2 pl-0">
                    123456
                  </td>
                  <td class="p-2 pr-0 text-end">
                    kkjkojojo
                  </td>
                  <td class="p-3 pr-12 text-end">
                    <span class="text-light-inverse text-md/normal">2024-04-11</span>

                  </td>
                  <td class="pr-0 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> In Progress </span>
                  </td>
                </tr>

                {/* <tr class="border-b border-dashed last:border-b-0">
                  <td class="p-3 pl-0">
                    <div class="flex items-center">
                      <div class="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg" class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div>
                      <div class="flex flex-col justify-start">
                        <a href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> iOS Login <span class="text-sm">(Morra)</span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <span class="font-semibold text-light-inverse text-md/normal">Bianca Winson</span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg> 6.8% </span>
                  </td>
                  <td class="p-3 pr-12 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> In Progress </span>
                  </td>
                  <td class="pr-0 text-start">
                    <span class="font-semibold text-light-inverse text-md/normal">2024-02-10</span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr class="border-b border-dashed last:border-b-0">
                  <td class="p-3 pl-0">
                    <div class="flex items-center">
                      <div class="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg" class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div>
                      <div class="flex flex-col justify-start">
                        <a href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Resto Aperto </a>
                      </div>
                    </div>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <span class="font-semibold text-light-inverse text-md/normal">Michael Kenny</span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg> 1% </span>
                  </td>
                  <td class="p-3 pr-12 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg"> Postponed </span>
                  </td>
                  <td class="pr-0 text-start">
                    <span class="font-semibold text-light-inverse text-md/normal">2023-05-15</span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr> 
              </tbody>
            </table> */}