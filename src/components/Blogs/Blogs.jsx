import React from 'react'
import { blogData } from './data'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'



const Blogs = () => {
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
                              alt="blog"
                           />
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

                  )
               })}

            </div>
         </div>
         <Footer />
      </section>
   )

}
export default Blogs; ``