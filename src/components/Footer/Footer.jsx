import React, { useEffect, useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import CookieConsent from 'react-cookie-consent';
import { Container, Row, Col, Stack } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  useEffect(() => {
  }, [])


  const onAcceptCookiee = () => {
    let testimonials = 'CA Gaurav Dhaneja, CA Deepak Goal, Yogesh Singhla'
    let team = 'Joytika, Sonali,meenakshi'
    let businessPartners = 'axis bank, kotak Mahindra bank, cisco'
    let Investor = 'axis bank, kotak Mahindra bank ,yes bank  ICICI bank,HDFC bank'
    let Useful = 'Invoice Discounting,Export Credits,Vendor Financing,Corp. Credit Cards'

    let q1 = 'What is supply chain lending?'
    let ans1 = 'Supply chain lending is a financial solution that provides working capital to businesses by leveraging their supply chain transactions, such as invoices, purchase orders, or inventory.'

    let q2 = 'What are the benefits of supply chain lending?'
    let ans2 = 'Supply chain lending offers businesses improved cash flow, better working capital management, access to quick funding, and the ability to negotiate better terms with suppliers.'

    let q3 = 'Who can benefit from supply chain lending?'
    let ans3 = ' Small and medium-sized businesses (SMBs), suppliers, distributors, manufacturers, and other entities involved in the supply chain can benefit from supply chain lending.'

    let q4 = 'How fast can I get funding through supply chain lending?'
    let ans4 = 'Supply chain lending is a financial solution that provides working capital to businesses by leveraging their supply chain transactions, such as invoices, purchase orders, or inventory.'

    let q5 = 'What types of transactions are eligible for supply chain lending?'
    let ans5 = 'Typically, invoices, purchase orders, and inventory can be used as collateral for supply chain lending. The specific eligibility criteria may vary depending on the platform.'

    let q6 = 'How does supply chain lending differ from traditional financing options?'
    let ans6 = 'Unlike traditional bank loans, which may require extensive paperwork and have stringent eligibility criteria, supply chain lending often offers faster approval times, more flexible terms, and the ability to leverage existing transactions.'

    let q7 = ' Is my data secure when using your platform?'
    let ans7 = 'Our platforms prioritize the security of user data and employ advanced encryption methods to protect sensitive information.'

    let q8 = 'How do I get started with supply chain lending?'
    let ans8 = 'To get started with supply chain lending, you can typically apply through our platforms website by providing information about your business, transactions, and financing needs. From there, the platform will assess your eligibility and guide you through the process.'

    let q9 = 'Can startups and small businesses secure business loans?'
    let ans9 = 'Yes. They can. There are specific types of business loans specially tailored for startups and SMEs to help them grow and compete with legacy players.'

    let q10 = 'What is the maximum business loan offered by AltaNeo?'
    let ans10 = 'The business loan limit in AltaNeo depends on the eligibility, your requirement, and viability of the project.'

    document.cookie = `testimonials=${testimonials}`
    document.cookie = `team=${team}`
    document.cookie = `BUSINESS PARTNERS=${businessPartners}`
    document.cookie = `Investor=${Investor}`
    document.cookie = `Useful Links=${Useful}`

    document.cookie = `${q1}=${ans1}`
    document.cookie = `${q2}=${ans2}`
    document.cookie = `${q3}=${ans3}`
    document.cookie = `${q4}=${ans4}`
    document.cookie = `${q5}=${ans5}`
    document.cookie = `${q6}=${ans6}`
    document.cookie = `${q7}=${ans7}`
    document.cookie = `${q8}=${ans8}`
    document.cookie = `${q9}=${ans9}`
    document.cookie = `${q10}=${ans10}`

  }

  return (<>
    <footer class="bg-gradient-to-r from-blue-950 to-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <img class="h-8" src={logo} alt="Company name" />
            <p class="text-sm leading-6 text-gray-400">Empowering Growth Through Seamless Financial Solutions</p>
            <div class="flex space-x-6">
              <a href="#" class="text-white hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" class="text-white hover:text-blue-4    00">
                <span class="sr-only">X</span>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" class="text-white hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" class="text-white hover:text-gray-500">
                <span class="sr-only">YouTube</span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h2 class="font-bold leading-6 text-white">Useful Links</h2>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/Invoice-Discounting" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Invoice Discounting</a>
                  </li>
                  <li>
                    <a href="/Export-Credits" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Export Credits</a>
                  </li>
                  <li>
                    <a href="/Vendor-Financing" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Vendor financing</a>
                  </li>
                  <li>
                    <a href="/simple-intrest-caclucator" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Corp. Credit Cards</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-bold leading-6 text-white"></h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Vendor</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Contact</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">About Us</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Expert Team</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="font-bold leading-6 text-white">Others</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Home</a>
                  </li>
                  <li>
                    <a href="/Terms" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Terms</a>
                  </li>
                  <li>
                    <a href="/Privacypolicy" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/Refundpolicy" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Refund</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Contact</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="font-bold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <h6 class="text-sm leading-6 text-gray-400">Nodal Officer:-</h6>
                  </li>
                  <li>
                    <h6 href="#" class="text-sm leading-6 text-gray-400 ">Somesh Chandel</h6>
                  </li>
                  <li>
                    <h6 class="text-sm leading-6 text-gray-400 ">+91 9817741345</h6>
                  </li>
                  <li>
                    <a href="mailto:Email@gmail.com" class="text-sm leading-6 text-gray-400 hover:text-blue-900">info@altaneofin.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-sm leading-5 text-gray-400">Copywrite &copy; 2024 All rights reserved <a href="" class='text-blue-400'> Altaneo</a></p>
        </div>

        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="I Accept"
          onAccept={onAcceptCookiee}
          cookieName="myAwesomeCookieName2"
          style={{ background: "#000", textAlign: 'left', paddingLeft: 60 }}
          buttonStyle={{ color: "#000", background: '#fff', fontSize: "16px", marginRight: 120, paddingInline: 10 }}
          expires={365}
        >
          This website uses cookies to ensure you get the best experience on our website.
        </CookieConsent>
      </div>
    </footer>
  </>
  )

  // return (
  //   <>

  //     <footer >
  //       <div className='content'>
  //         <div className="footer-content-wrapper">
  //           <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
  //             <div className="footer-logo">
  //               <a href="/"><img src={logo} className="img-fluid" alt="logo" /></a>
  //             </div>
  //             <div className="footer-text">
  //               <p>Empowering Growth Through Seamless <br />Financial Solutions</p>
  //               <span >Follow us</span>
  //             </div>
  //             <div className="footer-social-icon">
  //               <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  //               <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  //               <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
  //               <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
  //             </div>
  //           </div>
  //           <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
  //             <div className='footer-widget-heading'>
  //               <h3>Useful Links</h3>
  //               <a href="/Invoice-Discounting">Invoice Discounting</a>
  //               <a href="/Export-Credits">Export Credits</a>
  //               <a href="/Vendor-Financing">Vendor financing</a>
  //               <a href="">Corp. Credit Cards</a>
  //             </div>
  //           </div>
  //           <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
  //             <div className='footer-widget-heading'>
  //               <h3 className='mb-5'></h3>
  //               <a href="#">Vendor</a>
  //               <a href="#">Contact</a>
  //               <a href="#">About Us</a>
  //               <a href="#">Expert Team</a>
  //               <a href="#">Latest News</a>
  //             </div>
  //           </div>
  //           <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
  //             <div className='footer-widget-heading'>
  //               <h3>Legal</h3>
  //               <h6>Nodal Officer:-</h6>
  //               <h6>Somesh Chandel</h6>
  //               <h6>+91 9817741345</h6>
  //               <h6><a href="mailto:Email@gmail.com">info@altaneofin.in</a></h6>

  //             </div>
  //           </div>
  //         </div>
  //       </div>


  //       <CookieConsent
  //         debug={true}
  //         location="bottom"
  //         buttonText="I Accept"
  //         onAccept={onAcceptCookiee}
  //         cookieName="myAwesomeCookieName2"
  //         style={{ background: "#000", textAlign: 'left', paddingLeft: 60 }}
  //         buttonStyle={{ color: "#000", background: '#fff', fontSize: "16px", marginRight: 120, paddingInline: 10 }}
  //         expires={365}
  //       >
  //         This website uses cookies to ensure you get the best experience on our website.
  //       </CookieConsent>

  //       {/*       
  //       <div className="copyright-area">
  //       <div className="container">
  //         <div className="row">
  //           <div className="copyright-area-left-col col-xl-6 col-lg-6 text-center text-lg-left">
  //             <div className="copyright-text">
  //               <p>Copyright &copy; 2024, All Right Reserved <a href=""> Altaneo</a></p>
  //             </div>
  //           </div>
  //           <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
  //             <div className="footer-menu">
  //               <ul>
  //                 <li><a href="#">Home</a></li>
  //                 <li><a href="/Terms">Terms</a></li>
  //                 <li><a href="/Privacypolicy">Privacy</a></li>
  //                 <li><a href="/Refundpolicy">Refund</a></li>
  //                 <li> <ScrollLink to="contact" smooth={true} offset={0} duration={300}>
  //                   Contact
  //                 </ScrollLink></li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div> */}
  //     </footer>
  //   </>

  //   // <footer className="footer-section">
  //   //   <div className="container">
  //   //     <div className="footer-content pt-5 pb-5">
  //   //       <div className="row">
  //   //         <div className="col-3">
  //   //           <div className="footer-widget">
  //   //             <div className="footer-logo">
  //   //               <a href="/"><img src={logo} className="img-fluid" alt="logo" /></a>
  //   //             </div>
  //   //             <div className="footer-text">
  //   //               <p>Empowering Growth Through Seamless <br />Financial Solutions</p>
  //   //             </div>
  //   //             <div className="footer-social-icon">
  //   //               <span>Follow us</span>
  //   //               {/* Add social media icons */}
  //   //               <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
  //   //               <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  //   //               <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
  //   //               <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
  //   //             </div>
  //   //           </div>
  //   //         </div>

  //   //         <div className="col-3">
  //   //           <div className="footer-widget text-end">
  //   //             <div className="footer-widget-heading">
  //   //               <h3 style={{ marginLeft: 37 }}>Useful Links</h3>
  //   //             </div>
  //   //             <div className="footer-text mb-25">
  //   //               <ul>
  //   //                 <li><a href="/Invoice-Discounting">Invoice Discounting</a></li>
  //   //                 <li><a href="/Export-Credits">Export Credits</a></li>
  //   //                 <li><a href="/Vendor-Financing">Vendor financing</a></li>
  //   //                 <li><a href="/Credit-card">Corp. Credit Cards</a></li>
  //   //               </ul>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //         <div className="col-3 text-mid">
  //   //           <div className="footer-widget text-end">
  //   //             <div className="footer-widget-heading">
  //   //               <h3></h3>
  //   //             </div>
  //   //             <div className="footer-text mb-25">
  //   //               <ul>
  //   //                 <li><a href="/">Vendor</a></li>
  //   //                 <li><a href="#">Contact Us</a></li>
  //   //                 <li><a href="#">About us</a></li>
  //   //                 <li><a href="#">Expert Team</a></li>
  //   //                 <li><a href="#">Latest News</a></li>
  //   //               </ul>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //         {/* <div className="col-6">
  //   //           <div className="footer-widget">
  //   //             <div className="footer-widget-heading">
  //   //               <div className='right-footer'>
  //   //                 <h3>Useful links</h3>
  //   //                 <ul >
  //   //                   <li><a href="/Invoice-Discounting">Invoice Discounting</a></li>
  //   //                   <li><a href="/">Vendor</a></li>
  //   //                   <li><a href="/Export-Credits">Export Credits</a></li>
  //   //                   <li><a href="#">Contact Us</a></li>
  //   //                   <li><a href="/Vendor-Financing">Vendor financing</a></li>
  //   //                   <li><a href="#">About us</a></li>
  //   //                   <li><a href="/Credit-card">Corp. Credit Cards</a></li>
  //   //                   <li><a href="#">Expert Team</a></li>
  //   //                   <li></li>
  //   //                   <li><a href="#">Latest News</a></li>
  //   //                 </ul>
  //   //               </div>
  //   //             </div>
  //   //           </div>
  //   //         </div> */}
  //   //         <div className="col-3">
  //   //           <div className="footer-widget text-end">
  //   //             <div className="footer-widget-heading">
  //   //               <h3>Legal</h3>
  //   //             </div>
  //   //             <div className="footer-text mb-25">
  //   //               <p>Nodal Officer:-</p>
  //   //               <p>Somesh Chandel</p>
  //   //               <p>+91 9817741345</p>
  //   //               <p><a href="mailto:Email@gmail.com">info@altaneofin.in</a></p>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </div>

  //   //   <div className="copyright-area" style={{ height: 50 }}>
  //   //     <div className="container">
  //   //       <div className="row">
  //   //         <div className="col-xl-6 col-lg-6 text-center text-lg-left">
  //   //           <div className="copyright-text">
  //   //             <p>Copyright &copy; 2024, All Right Reserved <a href=""> Altaneo</a></p>
  //   //           </div>
  //   //         </div>
  //   //         <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
  //   //           <div className="footer-menu">
  //   //             <ul>
  //   //               <li><a href="#">Home</a></li>
  //   //               <li><a href="/Terms">Terms</a></li>

  //   //               <li><a href="/Privacypolicy">Privacy</a></li>
  //   //               <li><a href="/Refundpolicy">Refund</a></li>
  //   //               <li> <ScrollLink to="contact" smooth={true} offset={0} duration={300}>
  //   //                 Contact
  //   //               </ScrollLink></li>
  //   //             </ul>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   //     <CookieConsent
  //   //       debug={true}
  //   //       location="bottom"
  //   //       buttonText="I Accept"
  //   //       onAccept={onAcceptCookiee}
  //   //       cookieName="myAwesomeCookieName2"
  //   //       style={{ background: "#000", textAlign: 'left', paddingLeft: 60 }}
  //   //       buttonStyle={{ color: "#000", background: '#fff', fontSize: "16px", marginRight: 120, paddingInline: 10 }}
  //   //       expires={365}
  //   //     >
  //   //       This website uses cookies to ensure you get the best experience on our website.
  //   //     </CookieConsent>
  //   // </footer>
  // );
}

export default Footer;
