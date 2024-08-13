import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import futureOfSupplyChain from '../../../../public/assets/img/futureOfSupplyChain.png'
import fintech from '../../../../public/assets/img/fintech.png'
import invoiceDiscounting from '../../../../public/assets/img/invoiceDiscounting.png'
import Topbar from '../../common/Topbar'
import ceo2 from '../../../../public/assets/img/ceoImg.png'

// import blogData from '../data';

const MeenakshiP = () => {
  const history = useHistory();


  const blogData = [

    {
      id: 2,
      title: 'The Future of Supply Chain Finance',
      img: futureOfSupplyChain,
      route: 'futureOfSupplyChain',
      oneLine: "In today's rapidly evolving business landscape, supply chain finance has become a vital tool for ...",
      author: 'Meenakshi P'
    },
    {
      id: 4,
      title: 'Invoice Discounting- A Lifeline for Cash Flow Management',
      img: invoiceDiscounting,
      route: 'invoiceDiscounting',
      oneLine: "In today’s era managing cash flow is a challenge for all businesses. One effective ...",
      author: 'Meenakshi P'
    },
    {
      id: 8,
      title: 'The Role of Fintech in Democratizing Supply Chain Finance',
      img: fintech,
      route: 'RoleofFintech',
      oneLine: "Supply chains are the backbone of global trade, connecting suppliers, manufacturers, and...",
      author: 'Meenakshi P'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onClickReadMore = (route) => {
    history.push(`/blogs/author/${route}`);
  }

  const onClickAuthor = (author) => {
    if (author === 'Meenakshi P') {
      history.push(`/blogs/author/MeenakshiP`)
    }
  }

  return (
    <div>
      <Topbar
        title='Blogs'
        desc='Stay updated with the latest trends and insights in supply chain finance. Explore expert articles and industry news to help your business thrive.'
        from='Blogs'
        to='Author'/>
      <div className="min-h-screen bg-white mb-4 flex flex-col justify-center py-8 overflow-x-hidden">

        <section className="text-gray-400 bg-white body-font">
          <div className="container mx-auto px-4 py-12 lg:py-24">
            <h1 className="text-2xl lg:text-2xl font-bold title-font text-center text-black mb-6 lg:mb-6 underline italic font-serif">
              About Author
            </h1>

            <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-4 mb-4 max-w-full">
              <div className="p-8 mb-4 w-full md:w-2/3">
                <h2 className="text-gray-500 text-xl font-semibold">
                  Meenakshi Pawar
                  <br/>
                  <span className="text-gray-400 text-sm">MD and Chairperson</span>
                </h2 >
                <p className="text-gray-600 text-base mt-4">
                  With a robust academic background and extensive professional experience, Meenakshi brings a wealth of knowledge and expertise to our organization. She embarked on their academic journey at Miranda House, Delhi University, where they laid a strong foundation in Mathematics and Science. Further honing their skills, they attended London Business School, an institution renowned for shaping global business leaders.In their professional career, she has demonstrated remarkable leadership and strategic acumen. They have previously served as a Team Lead at the State Bank of India, where they managed and executed high-impact financial projects, driving growth and innovation.
                </p>
              </div>
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <img
                  src={ceo2}
                  alt="Img"
                  className="w-full h-90 object-cover"
                />
              </div>
            </div>
            <h2 className="text-gray-700 text-2xl text-center font-serif italic underline font-semibold mt-20">More Blogs by Meenakshi P</h2 >
            <hr className='bg-black h-1 border-black mt-4 w-full' />
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {blogData.map((data, index) => (
                    <div key={index} className="p-4 md:w-1/3">
                      <div className="h-full flex flex-col rounded-xl shadow-black shadow-lg bg-white overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src={data.img}
                          alt="blog"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                          <h1 className="title-font leading-relaxed text-xl font-medium text-black mb-3">
                            {data.title}
                          </h1>
                          <p className="leading-relaxed text-sm mb-1 text-gray-600">
                            {data.oneLine}
                          </p>
                          <div className="mt-auto mb-1">
                            <button
                              onClick={() => onClickReadMore(data.route)}
                              className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            >
                              Read More
                            </button>
                            <hr className="my-2" />
                            <p
                              className="text-blue-500 text-base cursor-pointer mt-1 "
                              onClick={() => onClickAuthor(data.author)}
                            >
                              Blog by {data.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default MeenakshiP