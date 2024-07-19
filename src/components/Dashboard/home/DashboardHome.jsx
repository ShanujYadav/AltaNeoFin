import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getactiveWindow } from '../../../store/slice/DashboardSlice';
import { useHistory } from 'react-router-dom';
import { FaRegFile } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import RmBox from '../RmBox';

const DashboardHome = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [status, setStatus] = useState('')

    // const onClickAnotherLoan = () => {
    //     history.push('/dashboard/vendorFinancing')
    // }

    return (
        <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md shadow-md">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Active loans</h1>
                    <p class="text-gray-500 text-base">List of your loans are here</p>
                </div>
                <RmBox/>
            </div>
            <hr class="border-gray-800" />
            <div class="bg-gray-100 p-4 ">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="flex justify-start w-full md:w-auto">
                        <button class="bg-blue-800 text-white px-2 py-2 rounded flex items-center"
                            onClick={() => history.push('/dashboard/vendorFinancing')}>
                            <IoMdAdd color="white" size={18} />
                            Apply for a new loan</button>
                    </div>
                    <div class="flex items-center justify-end w-full md:w-auto">
                        <span class="text-gray-600 mr-2">Filter by status</span>
                        <select class="bg-gray-100 rounded px-2 py-1">
                            <option value="all">All</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                </div>
                <div class="mt-6">
                    <ul class="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 border-b">
                        <li class="mr-1 md:mr-0">
                            <a class="block py-2 px-4 text-blue-600 border-b-2 border-blue-600 md:border-none md:border-b-2 md:border-transparent hover:border-blue-600" href="#">All Loans (9)</a>
                        </li>
                        <li class="mr-1 md:mr-0">
                            <a class="block py-2 px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent md:border-none md:border-b-2 md:border-transparent hover:border-blue-600" href="#">Pending Loans (3)</a>
                        </li>
                        <li class="mr-1 md:mr-0">
                            <a class="block py-2 px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent md:border-none md:border-b-2 md:border-transparent hover:border-blue-600" href="#">Approved Loans (2)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-gray-100">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Flow</th>
                            <th class="py-2 px-4 border-b">Application name</th>
                            <th class="py-2 px-4 border-b">Owner</th>
                            <th class="py-2 px-4 border-b">Loan Info</th>
                            <th class="py-2 px-4 border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-100">
                            <td class="py-2 px-4 border-b">
                                <input type="checkbox" class="mr-2" />
                                <span class="bg-blue-100 text-blue-800 py-1 px-2 rounded"># 0001</span>
                            </td>
                            <td class="py-2 px-4 border-b">Omkar</td>
                            <td class="py-2 px-4 border-b">Rohan Kumar</td>
                            <td class="py-2 px-4 border-b">
                                <div>Bangalore</div>
                                <div class="text-sm text-gray-500">Refinance</div>
                            </td>
                            <td class="py-2 px-4 border-b">
                                <span class="text-green-700 bg-green-200 py-1 px-3 rounded-full">Approved</span>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="py-2 px-4 border-b">
                                <input type="checkbox" class="mr-2" />
                                <span class="bg-blue-100 text-blue-800 py-1 px-2 rounded"># 0002</span>
                            </td>
                            <td class="py-2 px-4 border-b">Yashraj Sharma</td>
                            <td class="py-2 px-4 border-b">Roy Yusef</td>
                            <td class="py-2 px-4 border-b">
                                <div>Delhi</div>
                                <div class="text-sm text-gray-500">Refinance</div>
                            </td>
                            <td class="py-2 px-4 border-b">
                                <span class="text-yellow-700 bg-yellow-200 py-1 px-3 rounded-full">Pending</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default DashboardHome