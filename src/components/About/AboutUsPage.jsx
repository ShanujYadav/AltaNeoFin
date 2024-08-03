import React from 'react'
import coverimg from '../../../public/assets/img/cover.png'
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { IoMdTime } from "react-icons/io";


const AboutUsPage = () => {
    const history = useHistory()
    return (
        <div className=''>
            <div className="relative">
                <img src={coverimg} alt="Image" className="w-full h-80 lg:h-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4">
                    <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-serif">About Us</span>
                    <span className="text-white text-sm sm:text-sm md:text-base lg:text-lg font-bold font-serif text-center">
                        We Provide Supply Chain Finance solutions for your business.
                        <br className="hidden sm:block" />
                        Our expert team ensures seamless services that help your business to achieve more heights.
                    </span>
                    <span className="text-white text-xs font-serif">Home &gt; About</span>
                </div>
            </div>

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
                            onClick={() => history.push('/services')}
                            className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Know More
                        </button>
                    </div>
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
            </section>

            <section class="relative py-32 bg-slate-50">
                <div class="items-center flex flex-wrap">

                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4 ml-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <div class="ml-4">
                                <h2 class="font-semibold">Zero Paper Work</h2>
                                <p class="mt-2 text-sm text-gray-500">Smooth operations for a paperless workflow.</p>
                            </div>
                        </div>

                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4 mr-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg> */}
                                                                <IoMdTime size={25} color='blue'/>

                            </div>
                            <div class="ml-4">
                                <h2 class="font-semibold">Minimal time</h2>
                                <p class="mt-2 text-sm text-gray-500">Efficient solutions for fast results.</p>
                            </div>
                        </div>
                        <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mb-4  ml-[3rem]">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-100">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg> */}
                                <IoMdTime/>
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
                            <p class="mt-4 text-lg leading-relaxed text-muted font-serif">
                                In today's era of finance, staying ahead requires innovation, coordination, and a non-stop focus on customer needs. Our journey began with a simple yet profound vision - To transform the financial sector with innovative technology and exceptional user experiences.
                            </p>
                        </div>
                        <button
                            onClick={() => history.push('/login')}
                            className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 border border-transparent shadow-sm text-sm font-medium font-serif text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Get Start
                        </button>
                    </div>
                </div>
            </section>


            
            <div class="flex flex-col bg-white">
                <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold">574 Messages</h2>
                            <p class="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
                        </div>
                    </div>

                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold">1823 Users</h2>
                            <p class="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
                        </div>
                    </div>

                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold">548 Posts</h2>
                            <p class="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
                        </div>
                    </div>

                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold">129 Comments</h2>
                            <p class="mt-2 text-sm text-gray-500">Last commented 8 days ago</p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutUsPage