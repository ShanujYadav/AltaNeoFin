import React, { useRef} from 'react'
import blog3 from '../../../../public/assets/img/machineLearning.png'
 

const MachineLearningBlog = () => {
    const refs = useRef(Array.from({ length: 10 }, () => React.createRef()))

    
    const scrollToElement = (index) => {
        refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <>
            <div className="w-full mt-5 grid grid-cols-1 gap-4 p-4 sm:grid-cols-12 font-serif">
                <div className="col-span-1 flex items-center sm:col-span-8 mt-2 pt-4">
                    <div className="h-full rounded-xl shadow-cla-blue bg-white lg:items-center lg:px-8 pt-2 overflow-hidden w-full">
                        <div className="h-full max-h-screen overflow-auto">
                            <div className='h-48 lg:h-96'>
                                <img
                                    src={blog3}
                                    alt="blog-2-img"
                                    className='h-48 lg:h-96 w-full' />
                            </div>
                            <div class="p-6">
                                <h1 class="mt-2 mb-1 text-3xl md:text-3xl lg:text-4xl font-bold leading-none text-start font-serif">
                                    Machine Learning Techniques in Supply Chain Finance
                                </h1>
                                <p ref={refs.current[1]} class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    In the dynamic world of <a href="/blogs/supplyChainFinance" className='text-blue-600'>supply chain finance</a> businesses are constantly seeking ways to enhance efficiency, reduce costs, and mitigate risks.
                                    <br />
                                    Machine learning has emerged as a game-changing technology, providing innovative solutions to traditional challenges in supply chain finance.
                                    <br />
                                    This blog explores the various machine learning techniques that are transforming SCF and their impact on businesses.
                                </p>
                                <h1  class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-serif font-semibold leading-none text-start" >
                                    1. Predictive Analytics for Demand Forecasting
                                </h1>

                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Time Series Analysis, Regression Models
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application -
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Demand Forecasting- Machine learning algorithms analyse historical sales data, seasonal trends, and market conditions to predict future demand. This helps businesses optimise inventory levels, reducing holding costs and minimising stock outs.
                                    </li>
                                </ul>

                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact -
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Improved accuracy in demand forecasting leads to better procurement planning and resource allocation.
                                    </li>
                                    <li ref={refs.current[2]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Enhanced customer satisfaction due to timely availability of products.
                                    </li>
                                </ul>

                                <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-serif font-semibold leading-none text-start">
                                    2. Risk Assessment and Management
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Classification Algorithms (e.g., Decision Trees, Random Forests), Clustering
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        <a href="/blogs/creditRiskAssessment" className='text-blue-600'>Credit Risk Assessment</a> - ML models evaluate the creditworthiness of suppliers and buyers by analysing financial statements, payment histories, and external market data. This helps in determining the likelihood of default.
                                    </li>
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Fraud Detection- Clustering techniques group transactions based on similarities, identifying outliers that may indicate fraudulent activities.
                                    </li>
                                </ul>

                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Reduced risk of financial losses due to non-payment and fraud.
                                    </li>
                                    <li ref={refs.current[3]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Enhanced trust and reliability in the supply chain ecosystem.
                                    </li>
                                </ul>

                                <h1 class="mt-2 mb-1 text-xl font-serif md:text-xl lg:text-2xl font-semibold leading-none text-start">
                                    3. Dynamic Discounting Optimization
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Optimization Algorithms, Reinforcement Learning
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        <a href="/blogs/dynamicDiscounting" className='text-blue-600'>Dynamic Discounting</a> - Machine learning models determine the optimal discount rates and payment terms for early payments to suppliers. This involves analysing cash flow patterns, supplier behaviour, and market conditions.
                                    </li>
                                </ul>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Improved liquidity for suppliers through early payments.
                                    </li>
                                    <li ref={refs.current[4]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Cost savings for buyers due to negotiated discounts.
                                    </li>
                                </ul>


                                <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    4. Inventory Optimization
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Neural Networks, Genetic Algorithms
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        <a href="/blogs/inventoryManagement" className='text-blue-600'>Inventory Management</a> - ML algorithms optimise inventory levels by predicting demand fluctuations, lead times, and reorder points. Neural networks can handle complex, non-linear relationships in the data.
                                    </li>
                                </ul>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Reduced holding costs and minimised risk of stockouts.
                                    </li>
                                    <li ref={refs.current[5]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Enhanced ability to respond to market changes and demand variability.
                                    </li>
                                </ul>


                                <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    5. Supply Chain Visibility and Transparency
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Natural Language Processing (NLP), Sentiment Analysis
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Supplier Monitoring- NLP and sentiment analysis tools analyse news articles, social media, and financial reports to gauge the performance and reputation of suppliers. This helps in identifying potential risks and opportunities.
                                    </li>
                                </ul>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Enhanced supply chain visibility and proactive risk management.
                                    </li>
                                    <li ref={refs.current[6]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Better decision-making based on real-time information and sentiment analysis.
                                    </li>
                                </ul>

                                <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    6. Route and Logistics Optimization
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Machine Learning in Operations Research, Genetic Algorithms
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Route Optimization- ML models optimise transportation routes by considering factors like delivery time windows, traffic conditions, and fuel consumption. This helps in reducing transportation costs and improving delivery efficiency.
                                    </li>
                                </ul>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Reduced transportation costs and improved delivery times.
                                    </li>
                                    <li ref={refs.current[7]} className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Enhanced efficiency in logistics operations, leading to cost savings and customer satisfaction.
                                    </li>
                                </ul>
                                <h1 class="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    7. Contract and Document Analysis
                                </h1>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Technique- Natural Language Processing (NLP), Text Mining
                                </p>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Application-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Contract Analysis- NLP techniques extract and analyse key terms, clauses, and obligations from contracts. This helps in ensuring compliance, identifying risks, and automating contract management processes.
                                    </li>
                                </ul>
                                <p class="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-semibold font-serif">
                                    Impact-
                                </p>
                                <ul class="list-disc mt-2 text-gray-600 list-inside dark:text-gray-600 text-[18px] text-justify space-y-2">
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Reduced legal and compliance risks through proactive contract management.
                                    </li>
                                    <li className='leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif'>
                                        Improved efficiency in contract analysis and negotiation processes.
                                    </li>
                                </ul>
                                <h1 ref={refs.current[8]} class="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">The Final Take</h1>
                                <p class="leading-tight	 my-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Machine learning techniques are revolutionising supply chain finance by providing advanced tools for demand forecasting, risk assessment, inventory optimization, and more. By leveraging ML, businesses can enhance efficiency, reduce costs, and mitigate risks, leading to a more resilient and responsive supply chain.
                                    <br />
                                    <br />
                                    As technology continues to evolve, the integration of machine learning in <a href="/blogs/supplyChainFinance" className='text-blue-600'>supply chain finance </a>will only become more sophisticated and impactful. Businesses that adopt these advanced techniques will be better positioned to navigate the complexities of the global market and achieve sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-span-1 rounded-lg p-4 sm:col-span-4">
                    <h1 class="my-3 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start ">Table of Contents</h1>
                    <hr />
                    <ol class="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[20px] text-justify space-y-2">
                        <li onClick={() => scrollToElement(1)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif"> 
                                1.Predictive Analytics for Demand Forecasting
                        </li>
                        <li onClick={() => scrollToElement(2)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                2.Risk Assessment and Management
                        </li>
                        <li onClick={() => scrollToElement(3)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                3.Dynamic Discounting Optimization
                        </li>
                        <li onClick={() => scrollToElement(4)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                4.Inventory Optimization
                        </li>
                        <li onClick={() => scrollToElement(5)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                5.Supply Chain Visibility and Transparency
                        </li>
                        <li onClick={() => scrollToElement(6)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                6. Route and Logistics Optimization
                        </li>
                        <li onClick={() => scrollToElement(7)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                                7.Contract and Document Analysis
                        </li>
                        <li onClick={() => scrollToElement(8)} class="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                              8. The Final Take
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default MachineLearningBlog