import React from 'react'
import Footer from '../Footer/Footer'
import { FaHandshake } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa6"
import { FaBookOpen } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import vision from '../../../public/assets/img/Vision.png'


const Vision = () => {
  let visionArray = [
    {
      id: 1,
      icon: <FaRegLightbulb size={22} />,
      title: 'Innovation and Excellence',
      desc: 'Continuously innovate to stay at the forefront of financial technology. Strive for excellence in all our products and services, ensuring they meet the highest standards of quality and security.'
    },
    {
      id: 2,
      icon: <SiTicktick size={22} />,
      title: 'Inclusivity and Accessibility',
      desc: 'Provide financial services that are accessible to everyone, regardless of their socio-economic background.Bridge the gap between traditional banking and the underbanked population through user-friendly digital platforms.'
    },
    {
      id: 3,
      icon: <FaHandshake size={25} />,
      title: 'Transparency and Trust',
      desc: 'Foster a culture of transparency in all our operations, ensuring customers have clear and straightforward information. Build and maintain trust through ethical practices, robust security measures, and reliable customer support.'
    },
    {
      id: 4,
      icon: < FaBookOpen size={22} />,
      title: 'Empowerment and Education',
      desc: 'Empower our customers by providing tools and resources to make informed financial decisions.Promote financial literacy and education to help individuals and businesses navigate the complexities of the financial world.'
    },
    {
      id: 5,
      icon: < FaHandHolding size={25} />,
      title: 'Sustainability and Responsibility',
      desc: 'Commit to sustainable business practices that contribute positively to society and the environment.Take responsibility for our impact on the global community, advocating for economic stability and growth.'
    },
  ]

  return (
    <>
      <section class="text-gray-400 bg-white body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-4xl font-bold title-font text-center text-black mb-20 underline font-serif">Our Vision</h1>

          {/* <div className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row pb-24 max-w-full">
            <div className="p-8 mb-4 w-full md:w-2/3">
              <p className="text-gray-600 mt-4">
                At AltaNeo, our vision is to transform the financial landscape by leveraging cutting-edge technology to create inclusive, transparent, and efficient financial solutions.
                We aim to democratize access to financial services, empowering individuals and businesses to achieve their financial goals with confidence and ease.
              </p>
            </div>
            <div className="relative w-full md:w-1/3 h-64 md:h-auto">
              <img
                src={vision}
                alt="River"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}


          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {visionArray.map((data, index) => {
              return (
                <div class="p-4 mb-5 md:w-1/3 flex" key={index}>
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                    {data.icon}
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-black text-lg title-font font-semibold mb-2">{data.title}</h2>
                    <p class="leading-relaxed text-base text-gray-800 text-justify">{data.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Vision