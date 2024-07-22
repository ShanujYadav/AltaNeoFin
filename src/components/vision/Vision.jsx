import React from 'react'
import Footer from '../Footer/Footer'
import { FaHandshake } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa6"
import { FaBookOpen } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";

const Vision = () => {
  let lisionArray = [
    {

    }
  ]

  return (
    <>
      <section class="text-gray-400 bg-white body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-4xl font-bold title-font text-center text-black mb-20 underline font-serif">Our Vision
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 mb-5 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                < FaRegLightbulb size={22} />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-black text-lg title-font font-semibold mb-2">Innovation and Excellence</h2>
                <p class="leading-relaxed text-base text-gray-800 text-justify">
                  Continuously innovate to stay at the forefront of financial technology.
                  Strive for excellence in all our products and services, ensuring they meet the highest standards of quality and security.
                </p>
              </div>
            </div>
            <div class="p-4 mb-5 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800  text-indigo-400 mb-4 flex-shrink-0">
                < SiTicktick size={22} />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-black text-lg title-font font-semibold mb-2">Inclusivity and Accessibility</h2>
                <p class="leading-relaxed text-base text-gray-800 text-justify">
                  Provide financial services that are accessible to everyone, regardless of their socio-economic background.
                  Bridge the gap between traditional banking and the underbanked population through user-friendly digital platforms.
                </p>
              </div>
            </div>

            <div class="p-4 mb-5 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                < FaHandshake size={25} />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-black text-lg title-font font-semibold mb-2">Transparency and Trust</h2>
                <p class="leading-relaxed text-base text-gray-800 text-justify">
                  Foster a culture of transparency in all our operations, ensuring customers have clear and straightforward information.
                  Build and maintain trust through ethical practices, robust security measures, and reliable customer support.                  </p>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                < FaBookOpen size={22} />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-black text-lg title-font font-semibold mb-2">Empowerment and Education</h2>
                <p class="leading-relaxed text-base text-gray-800 text-justify">
                  Empower our customers by providing tools and resources to make informed financial decisions.
                  Promote financial literacy and education to help individuals and businesses navigate the complexities of the financial world.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                < FaHandHolding size={25} />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-black text-lg title-font font-semibold mb-2">Sustainability and Responsibility</h2>
                <p class="leading-relaxed text-base text-gray-800 text-justify">
                  Commit to sustainable business practices that contribute positively to society and the environment.
                  Take responsibility for our impact on the global community, advocating for economic stability and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Vision