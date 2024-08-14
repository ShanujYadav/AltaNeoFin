import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer'
import Topbar from '../../common/Topbar'
import ceo2 from '../../../../public/assets/img/ceoImg.png'
import logo from '../../../../public/assets/logo/AnLogo.png'
import cta from '../../../assets/img/ctaImg.png'
import ProfileCard from './ProfileCard';
import blogData from '../data'



const AuthorProfile = () => {
  const history = useHistory()
  const url = useLocation().pathname

  const [data, setData] = useState(blogData)
  const [author, setAuthor] = useState()


  useEffect(() => {
    const name = url.match(/[^/]+$/)[0]
    setAuthor(name)
    console.log(name);
    const filteredBlogs = blogData.filter(blog => blog.author === name)
    setData(filteredBlogs)
    console.log('filteredBlogs---', filteredBlogs)
  }, [])


  const onClickReadMore = (route) => {
    history.push(`/blogs/${route}`);
  }

  const onClickAuthor = (author) => {
    if (author === 'Meenakshi P') {
      history.push(`/blogs/author/Meenakshi`)
    }
  }


  return (
    <div>
      <Topbar
        title='Author'
        desc='Stay updated with the latest trends and insights in supply chain finance. Explore expert articles and industry news to help your business thrive.'
        from='Home &gt; Blogs'
        to='Author' />

      <div className="min-h-screen bg-slate-50 mb-4 flex flex-col justify-center py-8 overflow-x-hidden">
        <section className="text-gray-400 bg-slate-50 body-font">
          <div className="container mx-auto px-4 py-12 lg:py-12">
            
            <h1 className="text-4xl lg:text-4xl font-bold title-font text-center text-black mb-8 lg:mb-8 font-serif">
              About Author
            </h1>

            {author == 'Meenakshi' ?
              <ProfileCard
                name='Meenakshi'
                role='Chairperson And MD'
                desc='With a robust academic background and extensive professional experience, Meenakshi brings a wealth of knowledge and expertise to our organization. She embarked on their academic journey at Miranda House, Delhi University, where they laid a strong foundation in Mathematics and Science. Further honing their skills, they attended London Business School, an institution renowned for shaping global business leaders.In their professional career, she has demonstrated remarkable leadership and strategic acumen. They have previously served as a Team Lead at the State Bank of India, where they managed and executed high-impact financial projects, driving growth and innovation.'
                imgage={ceo2}
              /> : author == 'Jyotika' ? (
                <ProfileCard
                  name='Jyotika'
                  role='CTA'
                  desc='As Chief Technology Advisor, I am proud to lead a team of dedicated professionals who are passionate about driving innovation and delivering exceptional value to our clients. We are committed to staying at the forefront of technological advancements, continuously refining and enhancing our offerings to meet the evolving needs of the market.'
                  imgage={cta}
                />
              ) : author == 'Altaneo' ? (
                <ProfileCard
                  name='Altaneo'
                  role=''
                  desc=' We are Providing Supply Chain Finance for Your Business Enhance your cash flow and streamline operations with our tailored Supply Chain Finance solutions. Benefit from early payments, increased working capital, and strengthened supplier relationships. Contact us today to elevate your business efficiency!'
                  imgage={logo}
                />
              ) : <>

              </>
            }

            <h1 className="text-3xl lg:text-3xl font-semibold title-font text-center text-black my-24 lg:mb-8 font-serif">
              More Blogs by {author}
            </h1>

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {data.map((data, index) => (
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
                            >Read More
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
export default AuthorProfile