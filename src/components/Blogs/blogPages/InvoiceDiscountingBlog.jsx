import React, { useRef } from 'react';
import blog4 from '../../../../public/assets/img/invoiceDiscounting.png';
import InvoiceDiscountingPage from '../../products/invoiceDiscounting/InvoiceDiscountingPage';

const InvoiceDiscountingBlog = () => {
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
                Invoice Discounting- A Lifeline for Cash Flow Management
              </h1>
              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Introduction -
              </h1>
              <p ref={refs.current[1]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                In today’s era managing cash flow is a challenge for all businesses. One effective solution that has gained popularity in recent years is
                <a href={InvoiceDiscountingPage} className="hover:text-blue-600 cursor-pointer font-serif"> invoice discounting</a>. This financial strategy allows businesses to unlock the value tied up in their outstanding invoices, providing immediate access to cash. In this blog, we'll explore what invoice discounting is, how it works, and why it could be the key to solving your cash flow problems.
              </p>

              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                What is Invoice Discounting?
              </h1>
              <p ref={refs.current[2]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Invoice discounting is a financial arrangement where a business sells its outstanding invoices to a third party, usually a financial institution, at a discount. This provides the business with immediate cash, which can be used to cover operational expenses, invest in growth, or manage other financial obligations. Unlike traditional loans, invoice discounting does not create debt on the balance sheet, making it an attractive option for businesses looking to maintain a healthy financial profile.
              </p>

              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                How Does Invoice Discounting Work?
              </h1>

              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2 font-serif">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">1. Issuing an Invoice-</span>
                  Once a business delivers goods or services to a client, it issues an invoice with a due date, typically 30, 60, or 90 days.
                </li>
                <li>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white font-serif">2. Selling the Invoice-</span>
                  The business then sells this invoice to an invoice discounting company (the discounter) at a percentage of its total value. The percentage varies but usually ranges from 70% to 90% of the invoice amount.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">3. Receiving Immediate Cash-</span>
                  The discounter provides the business with the agreed-upon percentage of the invoice value, giving the business immediate access to cash.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">4. Invoice Collection-</span>
                  When the invoice is due, the client pays the full amount directly to the discounter.
                </li>
                <li>
                  <span ref={refs.current[3]} className="font-medium text-gray-900 dark:text-white font-serif">5. Final Settlement-</span>
                  Once the payment is received, the discounter pays the remaining balance of the invoice to the business, minus their fee.
                </li>
              </ol>

              <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Benefits of Invoice Discounting
              </h1>

              <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2 font-serif">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">1. Improved Cash Flow-</span>
                  By converting unpaid invoices into immediate cash, businesses can maintain a steady cash flow, ensuring they can meet their financial obligations without delay.
                </li>
                <li>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white font-serif">2. Growth Opportunities-</span>
                  By converting unpaid invoices into immediate cash, businesses can maintain a steady cash flow, ensuring they can meet their financial obligations without delay.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">3. Debt-Free Financing-</span>
                  Invoice discounting does not add debt to the business's balance sheet, making it an appealing alternative to traditional loans and credit lines.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">4. Flexibility-</span>
                  Businesses can choose which invoices to discount and when, allowing for flexible and tailored financial management.
                </li>
                <li>
                  <span ref={refs.current[4]} className="font-medium text-gray-900 dark:text-white font-serif">5. Maintained Client Relationships-</span>
                  In most cases, invoice discounting is confidential, meaning clients are unaware that their invoices have been sold. This helps maintain normal business relationships and client trust.
                </li>
              </ol>

              <h1 className="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                Invoice Discounting vs. Invoice Factoring
              </h1>

              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                It's important to distinguish invoice discounting from invoice factoring, another common invoice-based financing method. While both involve selling invoices to a third party, there are key differences-
              </p>

              <ul className="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2 font-serif">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">Control-</span>
                  In invoice discounting, the business retains control over its sales ledger and customer relationships. In invoice factoring, the factoring company typically takes over the sales ledger and collection process.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white font-serif">Confidentiality-</span>
                  Invoice discounting is usually confidential, whereas factoring often involves notifying clients that their invoices have been sold to a third party.
                </li>
                <li>
                  <span ref={refs.current[5]} className="font-medium text-gray-900 dark:text-white font-serif">Cost-</span>
                  Invoice discounting can be more cost-effective than factoring, as businesses are often charged lower fees due to retaining control over the collection process.
                </li>
              </ul>

              <h1 className="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">
                Is Invoice Discounting Right for Your Business
              </h1>
              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                Invoice discounting can be a powerful tool for businesses of all sizes, but it's especially beneficial for SMEs that face cash flow challenges. If your business experiences delays in receiving payments from clients, struggles with maintaining a steady cash flow, or seeks a flexible financing option that doesn't involve taking on additional debt, invoice discounting could be the perfect solution.
              </p>

              <h1 ref={refs.current[6]} className="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">
                The Final Take
              </h1>
              <p className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                In today's fast-paced business environment, maintaining healthy cash flow is essential for survival and growth. Invoice discounting offers a practical and efficient way to manage cash flow, providing immediate access to funds tied up in unpaid invoices. By leveraging this financial tool, businesses can ensure they have the liquidity needed to seize opportunities, meet obligations, and thrive in the competitive market.
                <br />
                <br />
                If you're considering invoice discounting for your business, it's crucial to partner with a reputable financial institution that understands your needs and can offer tailored solutions. At AltaNeo Finance, we specialise in supply chain finance solutions, including invoice discounting, to help businesses like yours achieve financial stability and growth. Contact us today to learn more about how we can support your business.
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
                2. What is Invoice Discounting?
              </span>
            </li>
            <li onClick={() => scrollToElement(2)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                3. How Does Invoice Discounting Work?
              </span>
            </li>
            <li onClick={() => scrollToElement(3)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                4. Benefits of Invoice Discounting
              </span>
            </li>
            <li onClick={() => scrollToElement(4)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                5. Invoice Discounting vs. Invoice Factoring
              </span>
            </li>
            <li onClick={() => scrollToElement(5)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                6. Is Invoice Discounting Right for Your Business
              </span>
            </li>
            <li onClick={() => scrollToElement(6)}>
              <span className="font-medium leading-relaxed text-gray-700 hover:text-blue-600 cursor-pointer font-serif">
                7. The Final Take
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDiscountingBlog;




// import React from 'react'
// import blog4 from '../../../../public/assets/img/invoiceDiscounting.png'


// const InvoiceDiscountingBlog = () => {


//   return (
//     <div class=" flex min-h-screen sm:grid-cols-1 md:grid-cols-2 mt-16">
//     <div class="lg:w-3/4 bg-gray-100 overflow-y-scroll max-h-screen w-full md:col-span-1">
//       <div class="h-full rounded-xl w-full">
//           <div className='h-48 lg:h-96'>
//             <img
//               src={blog4}
//               alt="blog-2-img"
//               className='h-full w-full'/>
//           </div>
//           <div class="p-6">
//             <h1 class="mt-2 mb-1 text-3xl md:text-3xl lg:text-4xl font-bold leading-none text-start">
//               Invoice Discounting- A Lifeline for Cash Flow Management
//             </h1>
//             <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               Introduction -
//             </h1>
//             <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify">
//               In today’s era managing cash flow is a challenge for all businesses. One effective solution that has gained popularity in recent years is invoice discounting. This financial strategy allows businesses to unlock the value tied up in their outstanding invoices, providing immediate access to cash. In this blog, we'll explore what invoice discounting is, how it works, and why it could be the key to solving your cash flow problems.                                         </p>

//             <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               What is Invoice Discounting?
//             </h1>
//             <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify">
//               Invoice discounting is a financial arrangement where a business sells its outstanding invoices to a third party, usually a financial institution, at a discount. This provides the business with immediate cash, which can be used to cover operational expenses, invest in growth, or manage other financial obligations. Unlike traditional loans, invoice discounting does not create debt on the balance sheet, making it an attractive option for businesses looking to maintain a healthy financial profile.
//             </p>

//             <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               How Does Invoice Discounting Work?
//             </h1>
//             <ol class="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">1. Issuing an Invoice-</span>
//                 Once a business delivers goods or services to a client, it issues an invoice with a due date, typically 30, 60, or 90 days.
//               </li>
//               <li>
//                 <span class="font-medium leading-tight text-gray-900 dark:text-white">2.Selling the Invoice- </span>
//                 The business then sells this invoice to an invoice discounting company (the discounter) at a percentage of its total value. The percentage varies but usually ranges from 70% to 90% of the invoice amount.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">3.Receiving Immediate Cash- </span>
//                 The discounter provides the business with the agreed-upon percentage of the invoice value, giving the business immediate access to cash.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">4.Invoice Collection-</span>
//                 When the invoice is due, the client pays the full amount directly to the discounter.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">5.Final Settlement-</span>
//                 Once the payment is received, the discounter pays the remaining balance of the invoice to the business, minus their fee.
//               </li>
//             </ol>
//             <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               Benefits of Invoice Discounting
//             </h1>
//             <ol class="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">1.Improved Cash Flow-</span>
//                 By converting unpaid invoices into immediate cash, businesses can maintain a steady cash flow, ensuring they can meet their financial obligations without delay.                                            </li>
//               <li>
//                 <span class="font-medium leading-tight text-gray-900 dark:text-white">2.Growth Opportunities- </span>
//                 With immediate access to funds, businesses can invest in new opportunities, such as purchasing inventory, expanding operations, or launching marketing campaigns.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">3.Debt-Free Financing- </span>
//                 Invoice discounting does not add debt to the business's balance sheet, making it an appealing alternative to traditional loans and credit lines.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">4.Flexibility-</span>
//                 Businesses can choose which invoices to discount and when, allowing for flexible and tailored financial management.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">5.Maintained Client Relationships-</span>
//                 In most cases, invoice discounting is confidential, meaning clients are unaware that their invoices have been sold. This helps maintain normal business relationships and client trust.
//               </li>
//             </ol>

//             <h1 class="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               Invoice Discounting vs. Invoice Factoring
//             </h1>

//             <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify">
//               It's important to distinguish invoice discounting from invoice factoring, another common invoice-based financing method. While both involve selling invoices to a third party, there are key differences-
//             </p>

//             <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">Control-</span>
//                 In invoice discounting, the business retains control over its sales ledger and customer relationships. In invoice factoring, the factoring company typically takes over the sales ledger and collection process.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">Confidentiality-</span>
//                 Invoice discounting is usually confidential, whereas factoring often involves notifying clients that their invoices have been sold to a third party.
//               </li>
//               <li>
//                 <span class="font-medium text-gray-900 dark:text-white">Cost-</span>
//                 Invoice discounting can be more cost-effective than factoring, as businesses are often charged lower fees due to retaining control over the collection process.
//               </li>
//             </ul>


//             <h1 class="my-2 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start">
//               Is Invoice Discounting Right for Your Business?
//             </h1>

//             <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify">
//               Invoice discounting can be a powerful tool for businesses of all sizes, but it's especially beneficial for SMEs that face cash flow challenges. If your business experiences delays in receiving payments from clients, struggles with maintaining a steady cash flow, or seeks a flexible financing option that doesn't involve taking on additional debt, invoice discounting could be the perfect solution.
//             </p>
//             <h1 class="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start">The Final Take</h1>
//             <p class="leading-tight	 mb-3 text-[18px] text-gray-600 text-justify">
//               In today's fast-paced business environment, maintaining healthy cash flow is essential for survival and growth. Invoice discounting offers a practical and efficient way to manage cash flow, providing immediate access to funds tied up in unpaid invoices. By leveraging this financial tool, businesses can ensure they have the liquidity needed to seize opportunities, meet obligations, and thrive in the competitive market.
//               <br />
//               <br />
//               If you're considering invoice discounting for your business, it's crucial to partner with a reputable financial institution that understands your needs and can offer tailored solutions. At AltaneoFin, we specialise in supply chain finance solutions, including invoice discounting, to help businesses like yours achieve financial stability and growth. Contact us today to learn more about how we can support your business.
//             </p>
//           </div>
//         </div>
//       </div>


//       <div class="sticky top-0 w-1/4 mx-4 hidden sm:block">
//           <h1 class="my-3 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start ">Table of Contents</h1>
//           <hr />
//           <ol class="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[20px] text-justify space-y-2">
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 1. Introduction
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 2. What is Invoice Discounting?
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 3. How Does Invoice Discounting Work?
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 4. Benefits of Invoice Discounting
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 5. Invoice Discounting vs. Invoice Factoring
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 6. Is Invoice Discounting Right for Your Business?
//               </span>
//             </li>
//             <li>
//               <span class="font-medium leading-relaxed text-gray-700 ">
//                 Conclusion
//               </span>
//             </li>
//           </ol>
//         </div>
//     </div>
//   )
// }
// export default InvoiceDiscountingBlog