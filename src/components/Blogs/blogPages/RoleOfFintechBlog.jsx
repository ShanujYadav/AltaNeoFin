import React, { useRef, useEffect } from 'react'
import fintech from '../../../../public/assets/img/fintech.png'

const RoleofFintechBlog = () => {
    const refs = useRef(Array.from({ length: 10 }, () => React.createRef()))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
                                    src={fintech}
                                    alt="blog-2-img"
                                    className='h-48 lg:h-96 w-full' />
                            </div>
                            <div className="p-6">
                                <h1 ref={refs.current[1]} className="mt-2 mb-1 text-3xl md:text-3xl lg:text-4xl font-bold leading-none text-start font-serif">
                                    The Role of Fintech in Democratizing Supply Chain Finance
                                </h1>
                                <p ref={refs.current[2]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Supply chains are the backbone of global trade, connecting suppliers, manufacturers, and consumers.
                                    <br />
                                    Despite their importance, traditional supply chain finance has often been riddled with inefficiencies, lack of transparency, and limited access, particularly for small and medium-sized enterprises (SMEs).
                                    <br />
                                    Enter fintech—a dynamic fusion of finance and technology—poised to revolutionise and democratise supply chain finance.
                                </p>
                                <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-serif font-semibold leading-none text-start">
                                    Bridging the Financial Inclusion Gap
                                </h1>
                                <p ref={refs.current[3]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    One of the most significant contributions of fintech to supply chain finance is enhancing financial inclusion. SMEs, which constitute a substantial portion of global trade, often struggle to access the necessary financing due to stringent credit requirements and lengthy approval processes. At Altaneofin, we leverage advanced algorithms, machine learning, and big data analytics to assess creditworthiness more accurately and swiftly, enabling SMEs to obtain funding that would otherwise be inaccessible through traditional banking channels.
                                </p>

                                <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-serif font-semibold leading-none text-start">
                                    Enhancing Transparency and Trust
                                </h1>
                                <p ref={refs.current[4]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Fintech solutions bring unparalleled transparency to supply chain finance. Blockchain technology, for instance, offers an immutable and transparent ledger of all transactions. This not only reduces the risk of fraud but also fosters trust among all parties involved. Suppliers, manufacturers, and financial institutions can trace the movement of goods and payments in real-time, ensuring accountability and reducing disputes.
                                </p>

                                <h1 className="mt-2 mb-1 text-xl font-serif md:text-xl lg:text-2xl font-semibold leading-none text-start">
                                    Streamlining Processes and Reducing Costs
                                </h1>
                                <p ref={refs.current[5]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Traditional supply chain finance involves multiple intermediaries and cumbersome paperwork, leading to delays and increased costs. Fintech simplifies these processes through automation and digital platforms. At Altaneofin, we utilise smart contracts powered by blockchain to automatically execute and enforce terms when predefined conditions are met, eliminating the need for intermediaries and reducing administrative overheads. This streamlining of processes not only saves time but also cuts costs significantly.
                                </p>

                                <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    Enabling Real-Time Financing Solutions

                                </h1>
                                <p ref={refs.current[6]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    The integration of fintech in supply chain finance has paved the way for real-time financing solutions. Dynamic discounting platforms, for example, allow suppliers to receive early payments from buyers in exchange for a discount, facilitated through an automated digital platform. This ensures that suppliers have immediate access to working capital, enhancing their liquidity and operational efficiency.
                                </p>

                                <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    Fostering Innovation through Data-Driven Insights
                                </h1>
                                <p ref={refs.current[7]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Fintech platforms generate a wealth of data through their operations. This data can be harnessed to gain valuable insights into supply chain dynamics, helping businesses to make informed decisions. Predictive analytics can forecast demand and optimise inventory management, while risk assessment tools can identify potential disruptions and mitigate risks proactively. These data-driven insights foster innovation and agility in supply chain operations.
                                </p>

                                <h1 className="mt-2 mb-1 text-xl md:text-xl lg:text-2xl font-semibold leading-none text-start font-serif">
                                    Promoting Sustainable Supply Chains
                                </h1>
                                <p ref={refs.current[8]} className="leading-tight mb-3 text-[18px] text-gray-600 text-justify font-serif">
                                    Sustainability is becoming a critical focus in global trade. Fintech can play a pivotal role in promoting sustainable supply chains by facilitating green financing options. Platforms can offer preferential financing rates for companies that adhere to sustainable practices, incentivizing environmental responsibility. Additionally, blockchain technology can track and verify the sustainability credentials of products, ensuring compliance with environmental standards.
                                </p>

                                <h1 className="mt-4 mb-1 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start font-serif">The Final Take</h1>
                                <p className="leading-tight	 my-3 text-[18px] text-gray-600 text-justify font-serif">
                                    I believe that democratisation of supply chain finance through fintech is transforming global trade by making financing more accessible, transparent, efficient, and sustainable. As fintech continues to evolve, its impact on supply chain finance will only grow, creating a more inclusive and resilient global supply chain ecosystem.
                                    <br />
                                    <br />
                                    At Altaneofin, we believe that welcoming fintech solutions is not just an opportunity but a necessity to thrive in the increasingly digital and interconnected world of trade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 rounded-lg p-4 sm:col-span-4">
                    <h1 className="my-3 text-2xl md:text-2xl lg:text-3xl font-semibold leading-none text-start ">Table of Contents</h1>
                    <hr />
                    <ol className="mt-2 text-gray-600 list-inside dark:text-gray-600 text-[20px] text-justify space-y-2">
                        <li onClick={() => scrollToElement(1)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            1. The Role of Fintech in Democratizing Supply Chain Finance
                        </li>
                        <li onClick={() => scrollToElement(2)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            2. Bridging the Financial Inclusion Gap
                        </li>
                        <li onClick={() => scrollToElement(3)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            3. Enhancing Transparency and Trust
                        </li>
                        <li onClick={() => scrollToElement(4)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            4. Streamlining Processes and Reducing Costs
                        </li>
                        <li onClick={() => scrollToElement(5)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            5. Enabling Real-Time Financing Solutions
                        </li>
                        <li onClick={() => scrollToElement(6)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            6. Fostering Innovation through Data-Driven Insights
                        </li>
                        <li onClick={() => scrollToElement(7)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            7. Promoting Sustainable Supply Chains
                        </li>
                        <li onClick={() => scrollToElement(8)} className="font-medium leading-relaxed text-gray-700 cursor-pointer hover:text-blue-400 font-serif">
                            8. The Final Take
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default RoleofFintechBlog;