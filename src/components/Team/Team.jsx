import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ceo from '../../assets/img/ceoImg.png';
import director from '../../assets/img/directorImg.png';
import cta from '../../assets/img/ctaImg.png';


const Team = () => {
  
  const currentRatio = (currentAsset, currentLaibility) => {
    return currentAsset / currentLaibility
  }

  const quickRatio = (currentAsset, inventory, expences, currentLaibility) => {
    return (currentAsset - inventory - expences) / currentLaibility
  }

  const returnOnAssets = (netIncome, avgTotalAssets) => {
    return (netIncome / avgTotalAssets) * 100
  }

  const returnOnEquity = (netIncome, totalEquity) => {
    return (netIncome / totalEquity) * 100
  }

  const debtToEquityRatio = (totalDebt, totalEquity) => {
    return totalDebt / totalEquity
  }











  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: window.innerWidth <= 768,
    pauseOnFocus: window.innerWidth <= 768,
  }

  return (
    <Slider {...settings} className='w-full overflow-hidden box-border sm:px-2'>
      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-hidden rounded lg:overflow-hidden">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={ceo}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 overflow-scroll ">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-800 uppercase">
                Meenakshi
              </h6>
              <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                CEO
              </h4>
              <hr />
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 overflow-scroll text-justify">
                I'm delighted to introduce you to Altaneo, where innovation meets efficiency in the realm of supply chain finance. As the CEO, I'm immensely proud of the transformative solutions we offer to businesses worldwide, redefining how they manage their financial operations within intricate supply chains.
                <br />
                <br />
                At Altaneo, we understand the pivotal role that supply chains play in the success of modern enterprises. Yet, we also recognize the inherent complexities and challenges they entail, from cash flow management to risk mitigation. That's why we've dedicated ourselves to crafting cutting-edge fintech solutions tailored to meet the diverse needs of our clients.
                <br />
                <br />
                Our commitment extends beyond mere financial transactions. We're passionate about fostering sustainability, resilience, and ethical practices within supply chains. By prioritizing environmental, social, and governance (ESG) principles, we're not just driving profitability but also catalysing positive change in communities and ecosystems worldwide.
                <br />
                <br />
                As we embark on this journey of innovation and transformation, I invite you to join us in shaping the future of supply chain finance. Together, let's unlock new possibilities, forge lasting partnerships, and pave the way for a more connected, sustainable, and prosperous global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-scroll rounded-lg lg:overflow-visible">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={cta}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 overflow-scroll ">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-800 uppercase">
                Jyotika
              </h6>
              <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                CTA
              </h4>
              <hr />
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 overflow-scroll text-justify">
                As the Chief Technology Advisor of Altaneo, it is my pleasure to extend a warm welcome to you. Here, at the forefront of supply chain lending fintech, we are dedicated to revolutionizing the way businesses navigate financial complexities within their supply chains.
                <br />
                <br />
                Our approach to supply chain lending is grounded in the transformative power of technology. From blockchain and artificial intelligence to data analytics and machine learning, we utilize the latest advancements to streamline processes, enhance transparency, and optimize financial decision-making throughout the supply chain.
                <br />
                <br />
                Through our intuitive platform, businesses can access timely capital, manage cash flow, and mitigate risks with unprecedented speed and efficiency. Whether you're a supplier seeking working capital, a manufacturer investing in expansion, or a distributor optimizing inventory management, our technology-driven solutions are tailored to meet your unique needs and goals.
                <br />
                <br />
                As Chief Technology Advisor, I am proud to lead a team of dedicated professionals who are passionate about driving innovation and delivering exceptional value to our clients. We are committed to staying at the forefront of technological advancements, continuously refining and enhancing our offerings to meet the evolving needs of the market.
                <br />
                <br />
                Thank you for considering Altaneo, as your trusted partner in supply chain lending fintech. We look forward to empowering your success and prosperity for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-scroll rounded-lg lg:overflow-visible">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={director}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 overflow-scroll ">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-800 uppercase">
                Sonia
              </h6>
              <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Director
              </h4>
              <hr />
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 overflow-scroll text-justify">
                As the Director of Altaneo, I'm thrilled to extend a warm welcome to you, introducing fintech poised to redefine the landscape of financial services. At Altaneo, we're not just in the business of lending; we're in the business of empowering dreams, fuelling growth, and fostering financial inclusion.
                <br />
                <br />
                At Altaneo, we're committed to revolutionizing lending by leveraging the latest in fintech innovation. Our cutting-edge platform harnesses the power of artificial intelligence, machine learning, and big data analytics to deliver seamless, efficient, and personalized lending solutions tailored to your unique needs.
                <br />
                <br />
                Whether you're a small business looking to expand operations, an entrepreneur with a groundbreaking idea, or an individual seeking financial flexibility, we're here to support you every step of the way. With our intuitive platform, you can expect faster approvals, competitive rates, and a hassle-free borrowing experience, empowering you to achieve your goals with confidence.
                <br />
                <br />
                As we embark on this journey together, I invite you to experience the difference that Altaneo can make in your financial journey. Whether you're a borrower, investor, or partner, we're committed to delivering excellence, integrity, and transparency in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Team;
