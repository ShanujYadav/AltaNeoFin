import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Partners from '../../Partners/Partners';
import Footer from '../../Footer/Footer';
import ID from '../../../../public/assets/img/ID-1.png';
import ID2 from '../../../../public/assets/img/ID-2.png';


const testimonials = [
    {
        quote: "“Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.”",
        author: "CA Deepak Goel",
        position: "Sahil international PNP",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
        quote: "“Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.”",
        author: "CA Gaurav Dhamija",
        position: "",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
        quote: "“Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.”",
        author: "Yogesh Singla",
        position: "Xieone Lifesciences Limited",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    }
];

const InvoiceDiscountingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
    }

    return (
        <div className="bg-gray-900 text-gray-100  min-h-screen p-6 overflow-hidden">
            <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-white text-black mt-5 pt-24 overflow-hidden">
                <svg className="absolute inset-0 m-auto w-full h-full md:w-4/5 md:h-4/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop offset="0" stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-300 filter blur-3xl rounded-full z-0"></div>
                <div className="relative  text-center p-4">
                    <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-blue-700 tracking-widest">Invoice</p>
                    <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">Dicounting</p>
                </div>
                <a href="/contactUs"rel="noopener noreferrer" className="flex flex-col justify-center items-center absolute inset-x-0 bottom-10 sm:bottom-16 md:bottom-20 text-inherit cursor-pointer h-10 w-32 md:h-12 md:w-40 transition-opacity duration-500 opacity-75 hover:opacity-100 mx-auto">
                    <button className="h-10 w-32 md:h-12 md:w-40 bg-blue-600 shadow-inner text-white rounded transition-all transform hover:translate-y-1">Contact Us</button>
                    <span className="h-10 w-20 md:h-14 md:w-24 bg-blue-900 rounded-full blur-xs border-round border-black opacity-0 -bottom-1/2 absolute transition-opacity"></span>
                </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                <h1 className="text-2xl font-bold text-black text-center mb-6">Optimize Your Working Capital</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2">
                        <h2 className="text-xl text-black font-semibold mb-4">Optimize your working capital with Altaneo's innovative bill discounting services.</h2>
                        <p className="text-gray-700 text-base mb-4">
                            At Altaneo, we offer unparalleled solutions to help you monetize your accounts receivable efficiently. By leveraging our services, you gain immediate access to funds, empowering you to seize growth opportunities, meet operational expenses, and enhance liquidity with ease.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
                        <img className="w-full h-80 object-cover" src={ID} alt="Gartner Magic Quadrant" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl font-bold text-black mb-2">Benefits of Altaneo's Invoice Discounting</h1>
                        <p className="text-gray-700 text-base mb-6"></p>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                    Enhanced Purchasing Power
                                    <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                </summary>
                                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                    <p className="text-gray-600 mt-2 text-sm ml-4">With Altaneo's corporate credit card solutions, you can enjoy enhanced purchasing power, enabling you to make necessary business purchases conveniently and efficiently.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                    Tailored Rewards and Benefits
                                    <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                </summary>
                                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                    <p className="text-gray-600 mt-2 text-sm ml-4">Our corporate credit card solutions come with tailored rewards and benefits designed to meet the unique needs of your business. Earn rewards on your everyday business expenses and enjoy exclusive perks.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                    Expense Management Insights
                                    <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                </summary>
                                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                    <p className="text-gray-600 text-sm mt-2 ml-4">Gain insights and control over your expenses with Altaneo's corporate credit card solutions. Track spending, monitor transactions, and optimize cash flow with advanced expense management tools.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img className='w-full h-80 object-cover' src={ID2} alt="AI Search" />
                    </div>
                </div>

            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl text-black font-bold mb-4">Enterprises, delight your customers</h1>
                        <p className="text-gray-700 text-base mb-4">
                            Grow your customer satisfaction - and sales. Because when your customers feel understood, they click and they come back.
                        </p>
                        <p className="text-gray-700 text-base mb-6">Get help from our experts to start fast and run efficiently.</p>

                    </div>
                    <div className="md:w-2/4 flex justify-center items-center">
                        <div className="relative w-full">
                            <SwitchTransition>
                                <CSSTransition
                                    key={currentSlide}
                                    addEndListener={(node, done) => {
                                        node.addEventListener('transitionend', done, false);
                                    }}
                                    classNames={{
                                        enter: 'transition-opacity duration-1000 ease-in-out',
                                        enterActive: 'opacity-100',
                                        exit: 'transition-opacity duration-1000 ease-in-out',
                                        exitActive: 'opacity-0'
                                    }}
                                >
                                    <div className="flex flex-col p-8 items-center text-center">
                                        <blockquote className="text-black mt-12 italic">{testimonials[currentSlide].quote}</blockquote>
                                        <p className="text-black font-bold text-md p-2 mt-4">{testimonials[currentSlide].author}</p>
                                        <p className="text-black  text-sm mb-4">{testimonials[currentSlide].position}</p>
                                        {/* <img src={testimonials[currentSlide].logo} alt="Logo" className="mt-4 w-24 h-auto" /> */}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                            <div className="flex justify-between mt-4">
                                <button className="w-10 h-10 bg-gray-200 text-black rounded-full hover:bg-gray-400 transition-all flex items-center justify-center" onClick={previousSlide}>
                                    &lt;
                                </button>
                                <button className="w-10 h-10 bg-gray-200 text-black rounded-full hover:bg-gray-400 transition-all flex items-center justify-center" onClick={nextSlide}>
                                    &gt;
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl  text-center mt-6">
                <h2 className="text-2xl text-black font-bold mb-2">Scaling ahead of your needs</h2>
                <p className="text-gray-600  text-base mb-10">

                </p>
                <Numbers />
                <div className="mt-12">
                </div>
            </div> */}

            <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                <h1 class="text-2xl md:text-3xl text-black font-bold mb-2">BUSINESSES ALTANEOFIED</h1>
                <p class="text-gray-700 text-base font-bold mb-2">Where are you?</p>
                <div class="flex justify-center items-center space-x-4 mb-8 overflow-hidden w-full">
                    <Partners />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InvoiceDiscountingPage;



// // InvoiceDiscountingPage.jsx

// import React, { useState } from 'react';
// import Footer from '../../Footer/Footer';
// import Title from '../../Title/Title';
// import Partner from '../../Partners/Partners';
// import Bot from '../../Bot/bot';



// const InvoiceDiscountingPage = () => {

//     const [currentSlide, setCurrentSlide] = useState(0)
//     const testimonials = [
//         {
//             quote: "“Algolia is a breeze to work with. With Algolia, our editorial team has seen significant productivity improvements when building the daily online edition of The Times and weekly edition of The Sunday Times, with search being 300-500 times faster than our prior solution.”",
//             author: "Matt Taylor",
//             position: "Editorial Product Manager @ The Times",
//             logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
//         },
//         {
//             quote: "“Algolia is a breeze to work with. With Algolia, our editorial team has seen significant productivity improvements when building the daily online edition of The Times and weekly edition of The Sunday Times, with search being 300-500 times faster than our prior solution.”",
//             author: "Matt Henry",
//             position: "Editorial Product Manager @ The Times",
//             logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
//         }
//     ]


//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
//     };

//     const previousSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
//     }

//     return (
//         <div className="bg-gray-900 text-gray-100  min-h-screen p-6 overflow-hidden">
//             <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-white text-black mt-5 pt-24 overflow-hidden">
//                 <svg className="absolute inset-0 m-auto w-full h-full md:w-4/5 md:h-4/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982 786" fill="none">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5Z" fill="url(#paint0_radial_1_8)" />
//                     <defs>
//                         <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
//                             <stop offset="0" stopColor="white" stopOpacity="0.2" />
//                             <stop offset="1" stopColor="#000" stopOpacity="0" />
//                         </radialGradient>
//                     </defs>
//                 </svg>
//                 <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-300 filter blur-3xl rounded-full z-0"></div>
//                 <div className="relative  text-center p-4">
//                     <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-blue-700 tracking-widest">Invoice</p>
//                     <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">Discounting</p>
//                 </div>
//                 <a href="https://youtu.be/1pW_sk-2y40" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center absolute text-inherit cursor-pointer h-10 w-32 md:h-12 md:w-40 z-10 bottom-10 right-10 sm:bottom-16 sm:right-16 md:bottom-20 md:right-1/4 transition-opacity duration-500 opacity-75 hover:opacity-100">
//                     <button className="h-10 w-32 md:h-12 md:w-40 bg-blue-600 shadow-inner text-white rounded transition-all transform hover:translate-y-1">View video</button>
//                     <span className="h-10 w-20 md:h-14 md:w-24 bg-blue-900 rounded-full blur-xs border-round border-black opacity-0 -bottom-1/2 absolute transition-opacity"></span>
//                 </a>
//                 <a href="https://x.com/juxtopposed" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center absolute text-inherit cursor-pointer h-10 w-32 md:h-12 md:w-40 z-10 bottom-10 left-10 sm:bottom-16 sm:left-16 md:bottom-20 md:left-1/4 transition-opacity duration-500 opacity-75 hover:opacity-100">
//                     <button className="h-10 w-32 md:h-12 md:w-40 bg-blue-600 shadow-inner text-white rounded transition-all transform hover:translate-y-1">Connect</button>
//                     <span className="h-10 w-20 md:h-14 md:w-24 bg-gray-600 rounded-full blur-lg opacity-50 -bottom-1/2 absolute transition-opacity"></span>
//                 </a>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl  text-center mt-6">
//                 <h1 className="text-2xl font-bold text-black text-center mb-6">A recognized leader</h1>
//                 <div className="flex flex-col md:flex-row items-center md:items-start">
//                     <div className="md:w-1/2">
//                         <h2 className="text-xl text-black font-semibold mb-4">The 2024 Gartner® Magic Quadrant™ for Search and Product Discovery</h2>
//                         <p className="text-gray-700 text-base mb-4">
//                             Algolia is in the 2024 Gartner® Magic Quadrant™ for Search and Product Discovery positioned furthest for Completeness of Vision. Learn more by downloading a copy of the report.
//                         </p>
//                     </div>
//                     <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
//                         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs10693-023-00413-7&psig=AOvVaw1jfIZ36fYEOSjVAIg_q9A7&ust=1719299982010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDPmtjZ84YDFQAAAAAdAAAAABAK" alt="Gartner Magic Quadrant" />
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
//                 <div className="flex flex-col md:flex-row items-center md:items-start">
//                     <div className="md:w-1/2 mb-8 md:mb-0">
//                         <h1 className="text-2xl font-bold text-black mb-2">The one-stop shop for AI search</h1>
//                         <p className="text-gray-700 text-base mb-6">Altaneo's AI search suite has unique strengths</p>
//                         <div className="space-y-4">
//                             <details className="group">
//                                 <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
//                                     Easy to use
//                                     <span className="text-blue-600 group-open:rotate-180">▾</span>
//                                 </summary>
//                                 <p className="text-gray-600 mt-2 text-sm ml-4">Implement our APIs in minutes and gain easy control over rankings.</p>
//                             </details>
//                             <details className="group">
//                                 <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
//                                     Fast
//                                     <span className="text-blue-600 group-open:rotate-180">▾</span>
//                                 </summary>
//                                 <p className="text-gray-600 text-sm mt-2 ml-4">Our search is designed to be fast and efficient, delivering results instantly.</p>
//                             </details>
//                             <details className="group">
//                                 <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
//                                     Scalable
//                                     <span className="text-blue-600 group-open:rotate-180">▾</span>
//                                 </summary>
//                                 <p className="text-gray-600 text-sm mt-2 ml-4">Scalable to meet the needs of businesses of all sizes, ensuring performance at scale.</p>
//                             </details>
//                         </div>
//                     </div>
//                     <div className="md:w-1/2">
//                         <img src="/mnt/data/Screenshot 2024-06-24 125233.png" alt="AI Search" />
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
//                 <div className="flex flex-col md:flex-row items-center justify-between">
//                     <div className="md:w-1/2 mb-8 md:mb-0">
//                         <h1 className="text-2xl text-black font-bold mb-4">Enterprises, delight your customers</h1>
//                         <p className="text-gray-700 text-base mb-4">
//                             Grow your customer satisfaction - and sales. Because when your customers feel understood, they click and they come back.
//                         </p>
//                         <p className="text-gray-700 text-base mb-6">Get help from our experts to start fast and run efficiently.</p>

//                     </div>
//                     <div className="md:w-1/2 flex flex-col items-center md:items-start relative">
//                         <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-lg mx-auto">
//                             <div className="mb-4">
//                                 <img src={testimonials[currentSlide].logo} alt="The Times Logo" className="mx-auto" />
//                             </div>
//                             <p className="text-lg italic text-gray-700 mb-6">{testimonials[currentSlide].quote}</p>
//                             <p className="text-sm font-semibold text-gray-500">{testimonials[currentSlide].author}</p>
//                             <p className="text-xs text-gray-400">{testimonials[currentSlide].position}</p>
//                             <div className="flex justify-between mt-6">
//                                 <button onClick={previousSlide} className="focus:outline-none">
//                                     <svg className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                                     </svg>
//                                 </button>
//                                 <button onClick={nextSlide} className="focus:outline-none">
//                                     <svg className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl  text-center mt-6">
//                 <h2 className="text-2xl text-black font-bold mb-2">Scaling ahead of your needs</h2>
//                 <p className="text-gray-600  text-base mb-10">
//                     Customers depend on Algolia to handle more queries than any other hosted search engine.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
//                     <div className="flex flex-col items-center mb-4 md:border-r border-gray-300 md:pr-8">
//                         <span className="text-3xl font-semibold text-blue-600">1.7+ trillion</span>
//                         <span className="text-gray-600">searches every year</span>
//                     </div>
//                     <div className="flex flex-col items-center md:border-r border-gray-300 md:px-8">
//                         <span className="text-3xl font-semibold text-blue-600">99.999%</span>
//                         <span className="text-gray-600">uptime SLA available</span>
//                     </div>
//                     <div className="flex flex-col items-center md:pl-8">
//                         <span className="text-3xl font-semibold text-blue-600">17,000+</span>
//                         <span className="text-gray-600">customers across 150+ countries</span>
//                     </div>
//                     <div className="flex flex-col items-center  md:border-r border-gray-300 md:pr-8">
//                         <span className="text-3xl font-semibold text-blue-600">30+ billion</span>
//                         <span className="text-gray-600">records indexed</span>
//                     </div>
//                     <div className="flex flex-col items-center md:border-r border-gray-300 md:px-8">
//                         <span className="text-3xl font-semibold text-blue-600">100%</span>
//                         <span className="text-gray-600">
//                             compliant & secure with SAML, SOC3, ISO27001, HIPAA, C5, MACH Alliance
//                         </span>
//                     </div>
//                     <div className="flex flex-col items-center md:pl-8">
//                         <span className="text-3xl font-semibold text-blue-600">382%</span>
//                         <span className="text-gray-600">ROI according to Forrester Research</span>
//                     </div>
//                 </div>
//                 <div className="mt-12">

//                 </div>
//             </div>
//             <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
//                 <h1 class="text-2xl md:text-3xl text-black font-bold mb-4">For startups – all the power, none of the headache</h1>
//                 <p class="text-gray-700 text-base mb-2">Startups, you can get going in minutes and scale for decades. Whatever your future demands, and however much you grow - Algolia has you covered.</p>
//                 <p class="text-gray-700 text-base mb-8">Eligible startups can begin with $10k of credits from Algolia and $100k from startup partners.</p>
//                 <div class="flex justify-center items-center space-x-4 mb-8">
//                     <img src="https://via.placeholder.com/100x50?text=Brex" alt="Brex" class="h-10" />
//                     <img src="https://via.placeholder.com/100x50?text=Notion" alt="Notion" class="h-10" />
//                     <img src="https://via.placeholder.com/100x50?text=Y+Combinator" alt="Y Combinator" class="h-10" />
//                     <img src="https://via.placeholder.com/100x50?text=Retool" alt="Retool" class="h-10" />
//                     <img src="https://via.placeholder.com/100x50?text=Asana" alt="Asana" class="h-10" />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }
// export default InvoiceDiscountingPage;
