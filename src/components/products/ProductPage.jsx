import React from 'react'
import Footer from '../Footer/Footer'
import { useHistory } from 'react-router-dom'

import creditCard from '../../../public/assets/img/creditCard.png'
import vendorFinancing from '../../../public/assets/img/vendorFinnacing.avif'
import invoiceDiscounting from '../../../public/assets/img/invoiceDiscounting.png'
import exportCredits from '../../../public/assets/img/export.avif'
import Topbar from '../common/Topbar'


const ProductPage = () => {
    const history = useHistory()

    return (
        <div>
            <Topbar
                title='Our Products'
                desc='Streamline your supply chain financing with our innovative solutions.Enhance cash flow efficiency and reduce risk across your supply chain.'
                from='Home'
                to='Product'
            />
            <section class="relative py-32 bg-white">
                <h1 class="text-4xl font-bold title-font text-center text-black mb-3 font-serif sm:text-justify">The most useful products <br />  for your business</h1>
                <h1 class="text-sm font-bold title-font text-center text-muted mb-4 font-serif">Seamlessly integrate financial services to <br /> maximize your business potential.
                </h1>
                <div class="min-w-screen min-h-screen items-center  lg:px-4 overflow-hidden relative">

                    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="md:flex items-center -mx-10">
                            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <img alt="..." class="w-full rounded-lg shadow-lg" src={vendorFinancing} />
                            </div>
                            <div class="w-full md:w-1/2 px-10">
                                <div class="mb-10">
                                    <h1 class="font-bold  text-3xl mb-4 font-serif">Vendor Financing</h1>
                                    <p class="text-base font-serif text-justify">Structured B2B marketplace for trade facilitation along with supply chain financing and trade intermediation. Our team crafts strategies that will help your business to reach new markets ...</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => history.push('/products/vendorFinancing')}
                                        className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="md:flex items-center -mx-10">
                            <div class="w-full md:w-1/2 px-10">
                                <div class="mb-10">
                                    <h1 class="font-bold text-3xl mb-4 font-serif">Invoice Discounting</h1>
                                    <p class="text-base font-serif text-justify">Structured B2B marketplace for trade facilitation along with supply chain financing and trade intermediation. We will support your journey from local to global success. So, what are you waiting for ...</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => history.push('/products/invoiceDiscounting')}
                                        className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Know More
                                    </button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-10 my-10 md:mb-0">
                                <img alt="..." class="w-full rounded-lg shadow-lg" src={invoiceDiscounting} />
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="md:flex items-center -mx-10">
                            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <img alt="..." class="w-full rounded-lg shadow-lg" src={exportCredits} />
                            </div>
                            <div class="w-full md:w-1/2 px-10">
                                <div class="mb-10">
                                    <h1 class="font-bold  text-3xl mb-4 font-serif">Export Credits</h1>
                                    <p class="text-base font-serif text-justify">We offer competitive export credit solutions, that helps your business to expand their global reach and secure financing for international trade. Partner with us so we will ensure to take your exports to new heights ! ... </p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => history.push('/products/exportCredits')}
                                        className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mb-14 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="md:flex items-center -mx-10">
                            <div class="w-full md:w-1/2 px-10">
                                <div class="mb-10">
                                    <h1 class="font-bold text-3xl mb-4 font-serif">Credit Cards</h1>
                                    <p class="text-base font-serif text-justify">We have designed our Corporate Credit Cards for businesses of all sizes, which offer streamlined expense tracking, flexible spending limits, and comprehensive reporting tools. Enjoy the convenience of easy cash flow management and exclusive rewards, while keeping your business expenses under control.</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => history.push('/products/exportCredits')}
                                        className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Know More
                                    </button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-10 my-10 md:mb-0">
                                <img alt="..." class="w-full rounded-lg shadow-lg" src={creditCard} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default ProductPage