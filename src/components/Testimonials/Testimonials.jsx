import React from 'react';
import Deepak from '../../assets/img/Deepak goal.png'
import Gourav from '../../assets/img/Gourav Dhmija.png'
import Yogesh from '../../assets/img/Yogesh Singla.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';


const Testimonials = () => {

  return (
    
    <div class="flex items-center justify-center">
      <div class="container max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          <div className='bg-white rounded-lg border slide col ' style={{ width: 320, height: 400 }}>
            <div className='user-info'>
              <img src={Deepak} alt='' style={{ width: 70, height: 70 }} />
              <div>
                <h3>CA Deepak Goel </h3>
                <span>Sahil international PNP</span>
              </div>
            </div>
            <hr />
            <div className="overflow-scroll" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
              <p class="text-gray-700 text-base text-justify text-muted">
                Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg border slide col' style={{ width: 320, height: 400 }}>
            <div className='user-info'>
              <img src={Gourav} alt='' style={{ width: 70, height: 70 }} />
              <div>
                <h3>CA Gaurav Dhamija</h3>
                <span></span>
              </div>
            </div>
            <hr />
            <div>
              <h6 className='text-gray-700 text-base text-justify text-muted' style={{ fontWeight: 400, textAlign: 'justify' }}>
                Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.
              </h6>
            </div>
          </div>

          <div className='bg-white rounded-lg border slide col' style={{ width: 320, height: 400 }}>
            <div className='user-info'>
              <img src={Yogesh} alt='' style={{ width: 70, height: 70 }} />
              <div>
                <h3>Yogesh Singla</h3>
                <span>Xieone Lifesciences Limited</span>
              </div>
            </div>
            <hr />
            <div>
              <h6 className='text-gray-700 text-base text-justify text-muted' style={{ fontWeight: 400, textAlign: 'justify' }}>
                Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.
              </h6>
            </div>
          </div>


          {/* <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover" />
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className='row' style={{ overflow: 'scroll' }}>
  //         <div className='slide bg-white mx-5 col mt-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Deepak} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>CA Deepak Goel </h3>
  //               <span>Sahil international PNP</span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div className="overflow-scroll" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
  //             <h5 className='text-muted text-lg overflow-scroll mt-2' style={{ fontWeight: 400, textAlign: 'justify',}} >
  //               Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.
  //             </h5>
  //           </div>
  //         </div>
  //         <div className='slide bg-white mx-5 col mt-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Gourav} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>CA Gaurav Dhamija</h3>
  //               <span></span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div>
  //             <h6 className='text-muted text-lg mt-2' style={{ fontWeight: 400, textAlign: 'justify' }}>
  //               Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.
  //             </h6>
  //           </div>
  //         </div>
  //         <div className='slide bg-white mx-5 col mt-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Yogesh} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>Yogesh Singla</h3>
  //               <span>Xieone Lifesciences Limited</span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div>
  //             <h6 className='text-muted text-lg mt-2' style={{ fontWeight: 400, textAlign: 'justify' }}>
  //               Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.
  //             </h6>
  //           </div>
  //         </div>
  //   </div>
  // )

  // return (
  //   <div className='container ' style={{ overflow: 'hidden' }}>
  //     <Swiper
  //       cssMode={true}
  //       navigation={true}
  //       slidesPerView={3}
  //       spaceBetween={50}
  //       pagination={true}
  //       mousewheel={true}
  //       keyboard={true}
  //       modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  //       className="mySwiper grid-container"
  //     >
  //       <SwiperSlide>
  //         <div className='slide bg-white mx-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Deepak} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>CA Deepak Goel </h3>
  //               <span>Sahil international PNP</span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div className="" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
  //             <h6 className='text-muted' style={{ fontWeight: 400, textAlign: 'justify' }}>
  //               Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.
  //             </h6>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className='slide bg-white mx-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Gourav} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>CA Gaurav Dhamija</h3>
  //               <span></span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div>
  //             <h6 className='text-muted' style={{ fontWeight: 400, textAlign: 'justify' }}>
  //               Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.
  //             </h6>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className='slide bg-white mx-5' style={{ width: 370, height: 350 }}>
  //           <div className='user-info'>
  //             <img src={Yogesh} alt='' style={{ width: 70, height: 70 }} />
  //             <div>
  //               <h3>Yogesh Singla</h3>
  //               <span>Xieone Lifesciences Limited</span>
  //             </div>
  //           </div>
  //           <hr />
  //           <div>
  //             <h6 className='text-muted' style={{ fontWeight: 400, textAlign: 'justify' }}>
  //               Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.
  //             </h6>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //     </Swiper>
  //   </div>
  // );

};
export default Testimonials