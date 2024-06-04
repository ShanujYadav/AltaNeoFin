import React, { useState } from 'react'
import RightContent from '../RightContent'
import { useDispatch } from 'react-redux';
import { getactiveWindow } from '../../../store/slice/DashboardSlice';
import { useHistory } from 'react-router-dom';
import { FaRegFile } from "react-icons/fa";


const DashboardHome = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [status, setStatus] = useState('')

    const onClickAnotherLoan = () => {
        history.push('/dashboard/vendorFinancing')
    }
    return (
        <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
            <div class="bg-white min-h-[80vh] shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">  
                <div onClick={onClickAnotherLoan}
                    className="relative w-4/12 h-40 flex flex-col items-center cursor-pointer justify-center rounded-[10px] border-[1px] border-gray-200 bg-blue-500 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none mb-12">
                    <div className="flex flex-col items-center">
                        <FaRegFile className="h-16 w-16 text-dark" />
                        <p className="text-lg font-bold mb-2 text-white">Apply for a<br></br> New Loan</p>
                    </div>
                </div>

                <div className="text-2xl font-bold mb-2">Active Loans</div>
                <div class="relative h-35 flex flex-grow flex-row items-center rounded-[10px] border-[1px]  bg-blue-100 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none ">

                    <div class="ml-[18px] h-[90px] w-full flex-row items-center overflow-auto">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="px-2 py-2 text-left leading-4 text-black-500 tracking-wider">User ID</th>
                                    <th class="px-2 py-2 text-left text-sm leading-4 text-black-500 tracking-wider">Phone</th>
                                    <th class="px-2 py-2 text-left text-sm leading-4 text-black-500 tracking-wider">Date</th>
                                    <th class="px-2 py-2 text-left text-sm leading-4 text-black-500 tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody class="">
                                <tr>
                                    <td class="px-2 py-2 ">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm leading-5 text-black">123456</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-no-wrap ">
                                        <div class="text-sm leading-5 text-black">+106420637</div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-no-wrap   text-black text-sm leading-5">
                                        September 12
                                    </td>
                                    <td class="px-2 py-2 whitespace-no-wrap  text-blue-900  text-sm leading-5">
                                        {status == 'success' ? (
                                            <span class="relative inline-block px-3 py-1 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-green-600  rounded-full"></span>
                                                <span class="relative text-xs text-white">Success</span>
                                            </span>
                                        ) : status == 'fail' ? (
                                            <span class="relative inline-block px-3 py-1 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-red-500 rounded-full"></span>
                                                <span class="relative text-xs text-white">Decline</span>
                                            </span>
                                        ) : (
                                            <span class="relative inline-block px-3 py-1 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-blue-500 rounded-full"></span>
                                                <span class="relative text-xs text-white">Pending</span>
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <RightContent />
        </div >
    )
}

export default DashboardHome