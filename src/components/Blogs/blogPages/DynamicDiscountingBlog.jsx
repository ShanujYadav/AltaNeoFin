import React, { useRef } from 'react';
import blog4 from '../../../../public/assets/img/dynamicDiscounting.png';

const DynamicDiscountingBlog = () => {
  const refs = useRef(Array.from({ length: 10 }, () => React.createRef()));

  const scrollToElement = (index) => {
    refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full mt-5 grid grid-cols-1 gap-4 p-4 sm:grid-cols-12 font-serif">
      <div className="col-span-1 flex items-center sm:col-span-8 mt-2 pt-4">
        <div className="h-full rounded-xl shadow-cla-blue bg-white lg:items-center lg:px-8 pt-2 overflow-hidden w-full font-serif">
          <div className="h-full max-h-screen overflow-auto font-serif">
            <div className="h-48 lg:h-96">
              <img src={blog4} alt="blog-6-img" className="w-full h-full object-cover font-serif" />
            </div>
            <div className="p-6 font-serif">
              <h1 ref={refs.current[0]} className="mt-2 mb-1 text-3xl md:text-3xl lg:text-4xl font-bold leading-none text-start font-serif">
                Dynamic Discounting: A Game-Changer for Supply Chain Finance
              </h1>
              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Introduction -
              </h1>
              <p ref={refs.current[1]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                A business needs efficient cash flow management to maintain a competitive edge. In today’s era, one innovative solution that has emerged to address this challenge is Dynamic Discounting. Let's explore how dynamic discounting is revolutionising supply chain finance and benefiting businesses of all sizes.
              </p>
              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                What is Dynamic Discounting?
              </h1>
              <p ref={refs.current[2]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Dynamic discounting is a solution which helps the buyers to increase their profits and decrease their cost of goods sold. It gives the flexibility to the suppliers to receive early payments from the buyers. Dynamic discounting provides the option to the suppliers to receive early payments from the buyers in exchange for a discount at a fixed rate. In Dynamic Discounting, no third party is included. Customers are paying early and in exchange, they are getting discounts.
              </p>
              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                How Does Dynamic Discounting Work?
              </h1>
              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2 font-serif">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">1. Invoice Submission-</span>
                  The supplier submits an invoice to the buyer.
                </li>
                <li>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white font-serif">2. Early Payment Offer-</span>
                  The buyer offers an early payment option with a discount. This offer can be made through a dynamic discounting platform.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">3. Acceptance-</span>
                  The supplier can choose to accept the offer. If accepted, the buyer processes the early payment, and the supplier receives funds before the invoice's due date.
                </li>
                <li>
                  <span ref={refs.current[3]} className="font-medium text-gray-900 dark:text-white font-serif">4. Discount Calculation-</span>
                  The discount is calculated dynamically based on the number of days the payment is made before the due date.
                </li>
              </ol>
              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Implementing Dynamic Discounting
              </h1>
              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                To implement dynamic discounting, companies typically use specialized software or platforms that integrate with their existing financial systems. These platforms automate the process, from invoice submission to early payment offers, making it seamless for both buyers and suppliers.
              </p>
              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2 font-serif">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">1. Choose a Platform-</span>
                  Select a dynamic discounting platform that suits your business needs. Ensure it integrates with your current financial systems.
                </li>
                <li>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white font-serif">2. Set Parameters-</span>
                  Define the discount rates and payment terms. The platform can often calculate these dynamically based on your cash flow and financial goals.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">3. Educate Your Suppliers-</span>
                  Communicate the benefits of dynamic discounting to your suppliers and encourage them to participate.
                </li>
                <li>
                  <span ref={refs.current[4]} className="font-medium text-gray-900 dark:text-white font-serif">4. Monitor and Adjust-</span>
                  Regularly review the performance of your dynamic discounting program and make adjustments as needed to maximize benefits.
                </li>
              </ol>
              <h1 className="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Real-World Example
              </h1>
              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Consider a large retail chain that uses dynamic discounting to manage its supplier payments. By offering early payment discounts, the retailer improves its cash flow and earns significant savings. Suppliers, in turn, benefit from faster payments, allowing them to reduce their reliance on costly credit lines. This win-win situation strengthens the supply chain and enhances the retailer's reputation as a reliable business partner.
              </p>
              <h1 ref={refs.current[5]} className="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">
                The Final Take
              </h1>
              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Dynamic discounting is more than just a financial tool, it’s a strategic approach to managing cash flow and supplier relationships. By leveraging this innovative solution, businesses can unlock significant financial benefits, foster stronger partnerships, and maintain a competitive edge in the market. Embracing dynamic discounting could be the key to driving your business forward in today’s dynamic economic landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg p-4 sm:col-span-4 font-serif">
        <div className="font-serif">
          <h1 className="my-3 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">Table of Contents</h1>
          <hr />
          <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[20px] text-justify space-y-2 font-serif">
            <li onClick={() => scrollToElement(0)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                1. Introduction
              </span>
            </li>
            <li onClick={() => scrollToElement(1)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                2. What is Dynamic Discounting?
              </span>
            </li>
            <li onClick={() => scrollToElement(2)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                3. How Does Dynamic Discounting Work?
              </span>
            </li>
            <li onClick={() => scrollToElement(3)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                4. Implementing Dynamic Discounting
              </span>
            </li>
            <li onClick={() => scrollToElement(4)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                5. Real-World Example
              </span>
            </li>
            <li onClick={() => scrollToElement(5)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                6. The Final Take
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DynamicDiscountingBlog;