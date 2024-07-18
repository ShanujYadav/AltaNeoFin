import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'

import supplyChainFinance from '../../../public/assets/img/supplyChainFinance.png'
import futureOfSupplyChain from '../../../public/assets/img/futureOfSupplyChain.png'
import machineLearning from '../../../public/assets/img/machineLearning.png'
import invoiceDiscounting from '../../../public/assets/img/invoiceDiscounting.png'
import sustainableSCF from '../../../public/assets/img/sustainableSCF.png'
import dynamicDiscounting from '../../../public/assets/img/dynamicDiscounting.png'
import blockchainTechnology from '../../../public/assets/img/blockchainTechnology.png'




const Blogs = () => {
   const blogData = [
      {
         id: 1,
         title: 'Supply Chain Finance - A Catalyst for Business Growth.',
         img: supplyChainFinance,
         route: 'supplyChainFinance',
         oneLine: "In today's fast-paced business environment, managing cash flow and maintaining ...'",
      },
      {
         id: 2,
         title: 'The Future of Supply Chain Finance',
         img: futureOfSupplyChain,
         route: 'futureOfSupplyChain',
         oneLine: "In today's rapidly evolving business landscape, supply chain finance has become a vital tool for ...",
      },
      {
         id: 3,
         title: 'Machine Learning Techniques in Supply Chain Finance',
         img: machineLearning,
         route: 'machineLearning',
         oneLine: 'In the dynamic world of supply chain finance, businesses are constantly seeking ...',
      },
      {
        id: 4,
        title: 'Invoice Discounting- A Lifeline for Cash Flow Management',
        img: invoiceDiscounting,
        route: 'invoiceDiscounting',
        oneLine: "In today’s era managing cash flow is a challenge for all businesses. One effective ...",
      },
      {
        id: 5,
        title: 'Dynamic Discounting: A Game-Changer for Supply Chain Finance',
        img: dynamicDiscounting,
        route: 'dynamicDiscounting',
        oneLine: "A business needs efficient cash flow management to maintain a competitive edge...",
      },
      {
        id: 6,
        title: 'Sustainable Supply Chain Finance - Green Financing and ESG Integration',
        img: sustainableSCF,
        route: 'sustainableSupplyChain',
        oneLine: "Sustainability is no longer a buzzword in today’s era, it’s a business imperative. In an...",
      },
      {
        id: 7,
        title: 'Blockchain Technology: Revolutionising Supply Chain Finance',
        img: blockchainTechnology,
        route: 'blockchainTechnology',
        oneLine: "In the rapidly evolving world of finance and technology, few innovations have...",
      },
   ]



   const history = useHistory()

   const onClickReadMore = (route) => {
      history.push(`/blogs/${route}`)
   }

   return (
      <section class="text-gray-600 body-font">
         <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
               {blogData.map((data, index) => {
                  return (
                     <div key={index} class="p-4 md:w-1/3">
                        <div class="h-full flex flex-col rounded-xl shadow-cla-blue bg-white overflow-hidden">
                           <img
                              class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                              src={data.img}
                              alt="blog" />
                           <div class="p-6 flex flex-col flex-grow">
                              <h1 class="title-font leading-relaxed text-xl font-medium text-black mb-3">{data.title}</h1>
                              <p class="leading-relaxed text-sm mb-3 text-gray-600">{data.oneLine}</p>
                              <div class="mt-auto mb-1">
                                 <button
                                    onClick={() => onClickReadMore(data.route)}
                                    class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                    Read More
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  )})}
            </div>
         </div>
         <Footer />
      </section>
   )

}
export default Blogs; ``