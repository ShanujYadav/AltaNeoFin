import React from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { IoMdTime } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { TbNotesOff } from "react-icons/tb";
import img from '../../../public/assets/img/ourStory.png'
import Topbar from '../common/Topbar';


const AboutUsPage = () => {
    const history = useHistory()
    return (
        <div className=''>
            <Topbar
                title='About Us'
                desc=' We Provide Supply Chain Finance solutions for your business. Our expert team ensures seamless services that help your business to achieve more heights.'
                from='Home'
                to='About' />
            <section class="relative py-32 bg-white">
                <div class="items-center flex flex-wrap">
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">
                            <h3 class="text-5xl font-semibold text-black font-serif">Our Story</h3>
                            <p class="mt-4 text-lg leading-relaxed text-muted font-serif">
                                In today's era of finance, staying ahead requires innovation, coordination, and a non-stop focus on customer needs. Our journey began with a simple yet profound vision - To transform the financial sector with innovative technology and exceptional user experiences.
                            </p>
                        </div>
                        <button
                            onClick={() => history.push('/products')}
                            className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Know More
                        </button>
                    </div>
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src={img} />
                    </div>
                </div>
            </section>

            <section class="relative py-32 bg-slate-50">
                <div class="items-center flex flex-wrap">

                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4 ml-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                < TbNotesOff size={22} color='blue' />
                            </div>
                            <div class="ml-4">
                                <h2 class="font-semibold">Zero Paper Work</h2>
                                <p class="mt-2 text-sm text-gray-500">Smooth operations for a paperless workflow.</p>
                            </div>
                        </div>

                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4 mr-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                <IoMdTime size={25} color='blue' />
                            </div>
                            <div class="ml-4">
                                <h2 class="font-semibold">Minimal time</h2>
                                <p class="mt-2 text-sm text-gray-500">Efficient solutions for fast results.</p>
                            </div>
                        </div>
                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4  ml-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                < GrSecure size={22} color='blue' />
                            </div>
                            <div class="ml-4">
                                <h2 class="font-semibold">Fully Secured</h2>
                                <p class="mt-2 text-sm text-gray-500">Data is protected with end-to-end encryption.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">
                            <h3 class="text-3xl font-semibold text-black font-serif">We are Providing Supply Chain Finance for Your Business</h3>
                            <p class="mt-4 text-sm leading-relaxed text-muted font-serif">
                                Enhance your cash flow and streamline operations with our tailored Supply Chain Finance solutions. Benefit from early payments,
                                increased working capital, and strengthened supplier relationships. Contact us today to elevate your business efficiency!                            </p>
                        </div>
                        <button
                            onClick={() => history.push('/login')}
                            className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Get Start
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUsPage