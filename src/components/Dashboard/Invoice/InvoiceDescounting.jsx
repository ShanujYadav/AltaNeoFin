import React from 'react'
import RightContent from '../RightContent'

const InvoiceDescounting = () => {
    return (
        <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">

            <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 ">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                        <h3 class="text-base font-normal text-gray-500">Sales this week</h3>
                    </div>
                    <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        12.5%
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div id="main-chart"></div>
            </div>
            <RightContent/>
            </div>
            )
}

export default InvoiceDescounting