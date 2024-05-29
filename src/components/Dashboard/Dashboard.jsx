import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Sidebar from './Sidebar';
import './Dashboard.css';
import { useState } from 'react';
import DashboardNav from './DashboardNav';
import RightContent from './RightContent';
import InvoiceDescounting from './Invoice/InvoiceDescounting';
import LoanForm1 from './VendorFinancing/VendorFinancingForm';
import 'react-responsive-modal/styles.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from './profile/Profile';
import CompletedKyc from './VendorFinancing/CompletedKyc';


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [completeKyc, setcompleteKyc] = useState(true)
  const [selectedService, setSelectedService] = useState('Vendor Financing')
  const history = useHistory()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  let agentId = queryParams.get("agentId")
  const profileDetails = useSelector((state) => state.profile)
  // let uuid = profileDetails.userInfo.uuid
  let uuid = 123456

  //   useEffect(() => {
  //     console.log('agentId----',agentId)
  //     console.log('uuid----',uuid)
  //     if(agentId!=uuid){
  //       history.push('/')
  //     }
  //  }, [])


  return (
    <div>
      <DashboardNav />
      <div class="flex overflow-hidden bg-white pt-16">
        <Sidebar selectedService={selectedService} setSelectedService={setSelectedService} />
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main >
            <div class="w-full text-end">
              <a href="/" className='cursor-pointer hover:text-blue-500 text-sm text-gray-500'>Home</a>
              <span className='mx-1'>/</span>
              <span className='text-gray-500 text-sm pr-3'>{selectedService}</span>
            </div>
            <div class="px-3 pt-2">
              {selectedService == 'Vendor Financing' && !completeKyc? (
                <LoanForm1 />
              ) :selectedService=='Vendor Financing' && completeKyc ?(
                <CompletedKyc/>
              ): selectedService == 'Profile' ? (
                <Profile />
              ) : (
                <InvoiceDescounting />
              )

                //   < div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
                //   {selectedService === 'Invoice Discounting' ? (
                //     <InvoiceDescounting />
                //   ) : selectedService === 'Vendor Financing' ? (
                //     <LoanForm1 />
                //   ) : (
                //     <>
                //       <InvoiceDescounting />
                //     </>
                //   )}
                //   <RightContent />
                // </div>
              }
            </div>
          </main>
        </div>
      </div >

      <div>
        {/* <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal> */}
      </div>
    </div >
  )


  // return (<>
  //   <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  //     <span class="sr-only">Open sidebar</span>
  //     <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  //     </svg>
  //   </button>


  //   <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  //     <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
  //       <ul class="space-y-2 font-medium">
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
  //               <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
  //               <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
  //             </svg>
  //             <span class="ms-3">Dashboard</span>
  //           </a>
  //         </li>
  //         <li>
  //           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
  //               <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
  //             <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
  //             </svg>
  //           </button>
  //           <ul id="dropdown-example" class="hidden py-2 space-y-2">
  //             <li>
  //               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
  //             </li>
  //             <li>
  //               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
  //             </li>
  //             <li>
  //               <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
  //               <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
  //             <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  //               <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
  //             <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
  //               <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
  //               <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //             <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  //               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
  //               <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
  //               <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
  //             </svg>
  //             <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </aside>



  //   <div class="p-4 sm:ml-64">
  //     <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
  //       <div class="grid grid-cols-3 gap-4 mb-4">
  //         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //       </div>
  //       <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
  //         <p class="text-2xl text-gray-400 dark:text-gray-500">
  //           <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //           </svg>
  //         </p>
  //       </div>
  //       <div class="grid grid-cols-2 gap-4 mb-4">
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //       </div>
  //       <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
  //         <p class="text-2xl text-gray-400 dark:text-gray-500">
  //           <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //           </svg>
  //         </p>
  //       </div>
  //       <div class="grid grid-cols-2 gap-4">
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
  //           <p class="text-2xl text-gray-400 dark:text-gray-500">
  //             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
  //               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  //             </svg>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // </>
  //   // <div>
  //   //   <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
  //   //     <div class="px-3 py-3 lg:px-5 lg:pl-3">
  //   //       <div class="flex items-center justify-between">
  //   //         <div class="flex items-center justify-start">

  //   //           <button id="toggleSidebarMobile" data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
  //   //             <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //               <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
  //   //             </svg>

  //   //             <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //               <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
  //   //             </svg>
  //   //           </button>

  //   //           <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
  //   //             <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo" />
  //   //             <span class="self-center whitespace-nowrap">Windster</span>
  //   //           </a>
  //   //           <form action="#" method="GET" class="hidden lg:block lg:pl-32">
  //   //             <label for="topbar-search" class="sr-only">Search</label>
  //   //             <div class="mt-1 relative lg:w-64">
  //   //               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
  //   //                 <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                   <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
  //   //                 </svg>
  //   //               </div>
  //   //               <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
  //   //             </div>
  //   //           </form>
  //   //         </div>
  //   //         <div class="flex items-center">
  //   //           <button id="toggleSidebarMobileSearch" type="button" class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
  //   //             <span class="sr-only">Search</span>
  //   //             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //               <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
  //   //             </svg>
  //   //           </button>
  //   //           <div class="hidden lg:flex items-center">
  //   //             <span class="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
  //   //             <div class="-mb-1">
  //   //               <a class="github-button" href="#" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">Star</a>
  //   //             </div>
  //   //           </div>
  //   //           <a href="#" class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
  //   //             <svg class="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //   //               <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
  //   //             </svg>
  //   //             Upgrade to Pro
  //   //           </a>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </nav>

  //   //   <div class="flex overflow-hidden bg-white pt-16">

  //   //     <aside id="logo-sidebar" aria-label="Sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
  //   //       <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
  //   //         <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
  //   //           <div class="flex-1 px-3 bg-white divide-y space-y-1">
  //   //             <ul class="space-y-2 pb-2">
  //   //               <li>
  //   //                 <form action="#" method="GET" class="lg:hidden">
  //   //                   <label for="mobile-search" class="sr-only">Search</label>
  //   //                   <div class="relative">
  //   //                     <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
  //   //                       <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                         <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
  //   //                       </svg>
  //   //                     </div>
  //   //                     <input type="text" name="email" id="mobile-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
  //   //                   </div>
  //   //                 </form>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
  //   //                   <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
  //   //                     <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3">Dashboard</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Kanban</span>
  //   //                   <span class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">Pro</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
  //   //                     <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Inbox</span>
  //   //                   <span class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">Pro</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span>
  //   //                 </a>
  //   //               </li>
  //   //               <li>
  //   //                 <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
  //   //                   <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                   <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
  //   //                 </a>
  //   //               </li>
  //   //             </ul>
  //   //             <div class="space-y-2 pt-2">
  //   //               <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
  //   //                 <svg class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //   //                   <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
  //   //                 </svg>
  //   //                 <span class="ml-4">Upgrade to Pro</span>
  //   //               </a>
  //   //               <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
  //   //                 <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                   <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
  //   //                   <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
  //   //                 </svg>
  //   //                 <span class="ml-3">Documentation</span>
  //   //               </a>
  //   //               <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
  //   //                 <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                   <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
  //   //                 </svg>
  //   //                 <span class="ml-3">Components</span>
  //   //               </a>
  //   //               <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
  //   //                 <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                   <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
  //   //                 </svg>
  //   //                 <span class="ml-3">Help</span>
  //   //               </a>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //     </aside>

  //   //     <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
  //   //     <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">

  //   //       <main>
  //   //         <div class="pt-6 px-4">
  //   //           <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
  //   //             <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
  //   //               <div class="flex items-center justify-between mb-4">
  //   //                 <div class="flex-shrink-0">
  //   //                   <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
  //   //                   <h3 class="text-base font-normal text-gray-500">Sales this week</h3>
  //   //                 </div>
  //   //                 <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
  //   //                   12.5%
  //   //                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                 </div>
  //   //               </div>
  //   //               <div id="main-chart"></div>
  //   //             </div>
  //   //             <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
  //   //               <div class="mb-4 flex items-center justify-between">
  //   //                 <div>
  //   //                   <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
  //   //                   <span class="text-base font-normal text-gray-500">This is a list of latest transactions</span>
  //   //                 </div>
  //   //                 <div class="flex-shrink-0">
  //   //                   <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
  //   //                 </div>
  //   //               </div>
  //   //               <div class="flex flex-col mt-8">
  //   //                 <div class="overflow-x-auto rounded-lg">
  //   //                   <div class="align-middle inline-block min-w-full">
  //   //                     <div class="shadow overflow-hidden sm:rounded-lg">
  //   //                       <table class="min-w-full divide-y divide-gray-200">
  //   //                         <thead class="bg-gray-50">
  //   //                           <tr>
  //   //                             <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //   //                               Transaction
  //   //                             </th>
  //   //                             <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //   //                               Date & Time
  //   //                             </th>
  //   //                             <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //   //                               Amount
  //   //                             </th>
  //   //                           </tr>
  //   //                         </thead>
  //   //                         <tbody class="bg-white">
  //   //                           <tr>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
  //   //                               Payment from <span class="font-semibold">Bonnie Green</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 23 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $2300
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr class="bg-gray-50">
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
  //   //                               Payment refund to <span class="font-semibold">#00910</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 23 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               -$670
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
  //   //                               Payment failed from <span class="font-semibold">#087651</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 18 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $234
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr class="bg-gray-50">
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
  //   //                               Payment from <span class="font-semibold">Lana Byrd</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 15 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $5000
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
  //   //                               Payment from <span class="font-semibold">Jese Leos</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 15 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $2300
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr class="bg-gray-50">
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
  //   //                               Payment from <span class="font-semibold">THEMESBERG LLC</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 11 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $560
  //   //                             </td>
  //   //                           </tr>
  //   //                           <tr>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
  //   //                               Payment from <span class="font-semibold">Lana Lysle</span>
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
  //   //                               Apr 6 ,2021
  //   //                             </td>
  //   //                             <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
  //   //                               $1437
  //   //                             </td>
  //   //                           </tr>
  //   //                         </tbody>
  //   //                       </table>
  //   //                     </div>
  //   //                   </div>
  //   //                 </div>
  //   //               </div>
  //   //             </div>
  //   //           </div>

  //   //           <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  //   //             <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
  //   //               <div class="flex items-center">
  //   //                 <div class="flex-shrink-0">
  //   //                   <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
  //   //                   <h3 class="text-base font-normal text-gray-500">New products this week</h3>
  //   //                 </div>
  //   //                 <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
  //   //                   14.6%
  //   //                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                 </div>
  //   //               </div>
  //   //             </div>
  //   //             <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
  //   //               <div class="flex items-center">
  //   //                 <div class="flex-shrink-0">
  //   //                   <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
  //   //                   <h3 class="text-base font-normal text-gray-500">Visitors this week</h3>
  //   //                 </div>
  //   //                 <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
  //   //                   32.9%
  //   //                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                 </div>
  //   //               </div>
  //   //             </div>
  //   //             <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
  //   //               <div class="flex items-center">
  //   //                 <div class="flex-shrink-0">
  //   //                   <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
  //   //                   <h3 class="text-base font-normal text-gray-500">User signups this week</h3>
  //   //                 </div>
  //   //                 <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
  //   //                   -2.7%
  //   //                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //   //                     <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
  //   //                   </svg>
  //   //                 </div>
  //   //               </div>
  //   //             </div>
  //   //           </div>
  //   //           {/* <BottomTables/> */}
  //   //         </div>
  //   //       </main>
  //   //     </div>
  //   //   </div>

  //   //   <script async defer src="https://buttons.github.io/buttons.js"></script>
  //   //   <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
  //   // </div>
  // )

};
export default Dashboard;
