import React from 'react';
import Footer from '../../Footer/Footer';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Partners from '../../Partners/Partners';
import ID2 from '../../../../public/assets/img/ID-2.png';
import vendor from '../../../../public/assets/img/vendor.png';

const VendorFinancingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
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
  ]


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

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
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-blue-700 tracking-widest">Vendor</p>
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">Financing</p>
        </div>
        <a href="/ContactUs" rel="noopener noreferrer" className="flex flex-col justify-center items-center absolute inset-x-0 bottom-10 sm:bottom-16 md:bottom-20 text-inherit cursor-pointer h-10 w-32 md:h-12 md:w-40 transition-opacity duration-500 opacity-75 hover:opacity-100 mx-auto">
          <button className="h-10 w-32 md:h-12 md:w-40 bg-blue-600 shadow-inner text-white rounded transition-all transform hover:translate-y-1">Contact Us</button>
          <span className="h-10 w-20 md:h-14 md:w-24 bg-blue-900 rounded-full blur-xs border-round border-black opacity-0 -bottom-1/2 absolute transition-opacity"></span>
        </a>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl  text-center mt-6">
        <h1 className="text-2xl font-bold text-black text-center mb-6">Why Altaneo's Vendor Financing?</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-xl text-black font-semibold mb-2">5x Faster invoice financing</h2>
            <p className="text-gray-700 text-base mb-4">
              Now with automation that accelerates underwriting the enterprise can increase spead of financing multifold
            </p>
            <h2 className="text-xl text-black font-semibold mb-2">90% Fewer human mistakes</h2>
            <p className="text-gray-700 text-base mb-4">
              Replace manual data entry with auto-population of fields to eliminate human bias. Leave no space for human errors with end-to-end lending process automation.            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <img className='w-full h-80 object-cover' src={vendor} alt="Gartner Magic Quadrant" />
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold text-black mb-2">Benefits of Altaneo's Vendor Financing</h1>
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                  Strengthened Supply Chain Relationships
                  <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                </summary>
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <p className="text-gray-600 mt-2 text-sm ml-4">Altaneo's vendor financing solutions enable you to build stronger relationships with your suppliers by providing them with access to affordable financing options. This strengthens collaboration and trust within your supply chain network.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                  Streamlined Operations
                  <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                </summary>
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <p className="text-gray-600 mt-2 text-sm ml-4">By offering financing to your suppliers, you can streamline your procurement processes and ensure a steady supply of goods and services. This helps reduce lead times, minimize disruptions, and optimize inventory management.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                  Reduced Payment Cycles
                  <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                </summary>
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <p className="text-gray-600 text-sm mt-2 ml-4">Altaneo's vendor financing solutions help reduce payment cycles by providing your suppliers with timely access to capital. This accelerates the payment process, allowing you to take advantage of early payment discounts and negotiate favorable terms.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                  Alleviated Cash Flow Constraints
                  <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                </summary>
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <p className="text-gray-600 text-sm mt-2 ml-4">Our financing options alleviate cash flow constraints for both you and your suppliers. By providing liquidity when it's needed most, we help ensure smooth operations and mitigate financial stress throughout the supply chain.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                  Mutual Growth and Success
                  <span className="text-blue-600 tran sform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                </summary>
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <p className="text-gray-600 text-sm mt-2 ml-4">With Altaneo's vendor financing, both you and your suppliers can achieve mutual growth and success. By supporting your suppliers' growth initiatives, you foster a collaborative ecosystem that benefits all parties involved.</p>
                </div>
              </details>
            </div>



          </div>
          <div className="md:w-1/2">
            <img className='w-full h-96 object-cover' src={ID2} alt="AI Search" />
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
  )
}
export default VendorFinancingPage