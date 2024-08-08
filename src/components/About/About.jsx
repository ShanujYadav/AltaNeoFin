import React from 'react'

const About = () => {
  return (
    <div className="about mx-auto my-12 flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-[90%]">
      <div className="about-left relative w-full md:w-auto">
        <h3 className="text-md font-semibold text-[#212EA0] text-left">ABOUT ALTANEO</h3>
        <h2 className="text-lg md:text-3xl lg:text-4xl text-[#000F38] my-2 max-w-xl text-left">Nurturing Tomorrow's Leaders Today</h2>
        <p className="text-lg text-justify text-[#676767] mb-4">Altaneo Finance is a pioneering fintech company dedicated to transforming supply chain finance. With a keen understanding of the complexities of modern commerce, we offer a diverse range of innovative financial solutions tailored to meet the unique needs of businesses across industries.</p>
        <p className="text-lg text-justify text-[#676767] mb-4">Backed by a team of seasoned professionals with extensive experience in finance, technology, and supply chain management, we are committed to delivering unparalleled value to our clients. Our cutting-edge technology platform, coupled with strategic partnerships with leading commercial banks, positions us as a trusted partner for businesses seeking to optimize their working capital, streamline operations, and drive growth.</p>
      </div>
    </div>


  )
}

export default About