import React, { useRef, } from 'react'
import blog6 from '../../../../public/assets/img/sustainableSCF.png';

const SustainableSupplyChain = () => {
    const refs = useRef(Array.from({ length: 10 }, () => React.createRef()))

  const scrollToElement = (index) => {
    refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="w-full mt-5 grid grid-cols-1 gap-4 p-4 sm:grid-cols-12 font-serif">
      <div className="col-span-1 flex items-center sm:col-span-8 mt-2 pt-4">
        <div className="h-full rounded-xl shadow-cla-blue bg-white lg:items-center lg:px-8 pt-2 overflow-hidden w-full">
          <div className="h-full max-h-screen overflow-auto">
            <div className="h-48 lg:h-96">
              <img src={blog6} alt="blog-6-img" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h1 ref={refs.current[1]} className="mt-2 mb-1 text-3xl md:text-3xl lg:text-4xl font-bold leading-none text-start font-serif">
                Sustainable Supply Chain Finance - Green Financing and ESG Integration
              </h1>
              <h1  className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Introduction -
              </h1>
              <p  ref={refs.current[2]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Sustainability is no longer a buzzword in today’s era, it’s a business imperative. In an era marked by environmental awareness and social responsibility, the corporate world is increasingly turning to sustainable practices to ensure long-term success and compliance with global standards. One significant area undergoing a transformation is supply chain finance, with companies integrating green financing and Environmental, Social, and Governance (ESG) principles. In this blog, we will explore the concepts of green financing and ESG integration in supply chain finance and how AltaneoFin is leading the way in applying ESG principles in their business.
              </p>

              <h1  className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                What is Sustainable Supply Chain Finance
              </h1>
              <p  ref={refs.current[3]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Sustainable Supply Chain Finance refers to the use of financial instruments and practices that promote environmental and social sustainability within the supply chain. This includes incorporating green financing options and ensuring that ESG criteria are met across all supply chain activities.
              </p>

              <h1  className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Green Financing
              </h1>
              <p  ref={refs.current[4]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Green Financing involves raising capital for projects that have positive environmental impacts. In the context of supply chain finance, this means providing financial incentives for suppliers who adopt eco-friendly practices, such as reducing carbon emissions, using renewable energy, or implementing sustainable sourcing strategies.
              </p>
              <h1  className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Key Benefits of Green Financing
              </h1>


              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                <li className='font-serif'>
                  <span className="font-medium text-gray-900">1. Environmental Protection-</span>
                  Encourages suppliers to adopt sustainable practices, reducing their overall environmental footprint.
                </li>
                <li className='font-serif'>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white">2. Cost Savings- </span>
                  Energy-efficient and sustainable practices often lead to long-term cost savings.
                </li>
                <li ref={refs.current[5]} className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">3. Reputation- </span>
                  Enhances the reputation of companies and their suppliers by demonstrating a commitment to sustainability.
                </li>
              </ol>
              <h1   className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                ESG Integration
              </h1>
              <p ref={refs.current[6]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Environmental, Social, and Governance (ESG) integration involves incorporating ESG criteria into the decision-making processes of supply chain finance. This means evaluating and selecting suppliers based not only on financial performance but also on their environmental impact, social responsibility, and governance practices.
              </p>
              <h1  className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Key Components of ESG Integration
              </h1>


              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                <li className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">1. Environmental Criteria-</span>
                  Assessing a company’s impact on the environment, including energy use, waste management, and carbon footprint.
                </li>
                <li className='font-serif'>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white">2. Social Criteria- </span>
                  Evaluating a company’s relationships with employees, suppliers, customers, and communities, ensuring fair labour practices and human rights.
                </li>
                <li ref={refs.current[7]} className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">3. Governance Criteria- </span>
                  Examining a company’s leadership, executive pay, audits, internal controls, and shareholder rights.
                </li>
              </ol>

              <h1  className="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                How Altaneo Finance Applies ESG in Their Business
              </h1>

              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                At Altaneo Finance, we believe that integrating ESG principles into our supply chain finance solutions is crucial for building a sustainable future. Here’s how we apply ESG criteria in our business:
              </p>

              <ul className="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] font-serif text-justify space-y-2">
                <li className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">Environmental Stewardship-</span>
                  Green Financing Options: We offer preferential financing rates to suppliers who meet specific environmental standards, such as reducing emissions or using renewable energy sources. <br />
                  Sustainable Investments: Our investment strategies prioritise projects that contribute to environmental sustainability, including clean energy and resource-efficient technologies.
                </li>
                <li className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">Social Responsibility-</span>
                  Fair Labor Practices: We ensure that our suppliers adhere to fair labour practices, including fair wages, safe working conditions, and the prohibition of child labour.<br />
                  Community Engagement: We support suppliers who engage positively with their local communities, promoting social development and inclusive growth.
                </li>
                <li ref={refs.current[8]} className='font-serif'>
                  <span className="font-medium text-gray-900 dark:text-white">Governance Excellence-</span>
                  Transparency: We maintain high standards of transparency and accountability in all our financial transactions and supply chain activities.<br />
                  Ethical Practices: We work with suppliers who demonstrate strong ethical practices and adhere to robust governance standards, ensuring integrity and compliance with regulations.
                </li>
              </ul>

              <h1 className="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                The Impact of ESG Integration at Altaneo Finance
              </h1>

              <p ref={refs.current[9]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                By integrating ESG principles into our supply chain finance solutions, Altaneo Finance is able to create value not just for our business, but for the broader ecosystem in which we operate. Our approach leads to more sustainable supply chains, promotes ethical business practices, and fosters a positive impact on society and the environment.
              </p>
              <h1  className="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">
                The Final Take
              </h1>
              <p  className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Sustainable supply chain finance, through green financing and ESG integration, is essential for creating resilient and responsible supply chains. At AltaneoFin, we are committed to leading the charge in this transformative journey, ensuring that our financial solutions support sustainable growth and contribute to a better future. By prioritising environmental stewardship, social responsibility, and governance excellence, we are helping to build a more sustainable and equitable world.
                <br />
                <br />
                For more insights on sustainable supply chain finance and how Altaneo Finance is making a difference, follow us on our social media channels and visit our website. Together, we can drive positive change and achieve a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 rounded-lg p-4 sm:col-span-4">
        <div className="">
          <h1 className="my-3 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start">Table of Contents</h1>
          <hr />
          <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[20px] text-justify space-y-2">
            <li onClick={() => scrollToElement(1)} >
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                1. Introduction
              </span>
            </li>
            <li onClick={() => scrollToElement(2)} className="font-serif leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer">
                2. What is Sustainable Supply Chain Finance?
            </li>
            <li onClick={() => scrollToElement(3)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                3. Green Financing
              </span>
            </li>
            <li onClick={() => scrollToElement(4)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                4. Key Benefits of Green Financing
              </span>
            </li>
            <li onClick={() => scrollToElement(5)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                5. ESG Integration
              </span>
            </li>
            <li onClick={() => scrollToElement(6)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                6. Key Components of ESG Integration
              </span>
            </li>
            <li onClick={() => scrollToElement(7)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                7. How Altaneo Finance Applies ESG in Their Business
              </span>
            </li>
            <li onClick={() => scrollToElement(8)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                8. The Impact of ESG Integration at Altaneo Finance
              </span>
            </li>
            <li onClick={() => scrollToElement(9)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                9. The Final Take
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SustainableSupplyChain;
