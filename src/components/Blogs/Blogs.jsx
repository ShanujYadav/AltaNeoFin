import React, { useState } from 'react'
import { blogData } from './data'
import { useHistory } from 'react-router-dom'

const Blogs = () => {
   const history=useHistory()

   const onClickReadMore = (id) => {
      history.push(`/DetaildBlog?id=${id}`)
   }

   const onClickOpenMore=(id)=>{
      history.push(`/details?idk=${id}`)
   }

   return (
      <section class="text-gray-600 body-font">
         <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
               {blogData.map((data, index) => {
                  return (
                     <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                           <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                              src={data.img} alt="blog" />
                           <div class="p-6">
                              {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                              <h1 class="title-font leading-relaxed text-xl font-medium text-black mb-3">{data.title}</h1>
                              <p class="leading-relaxed text-sm mb-3 text-gray-600">{data.oneLine}</p>
                              <div class="flex items-center flex-wrap ">
                                 <button
                                    onClick={() => onClickReadMore(data.id)}
                                    class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Read more</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
export default Blogs;``