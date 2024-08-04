import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { TiThMenu } from "react-icons/ti"
const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSMEsHover = () => {
    setDropdownVisible(true);
  }

  const handleSMEsLeave = () => {
    setDropdownVisible(false);
  }

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <div className='container' style={{}}>
      <nav className={` ${sticky ? 'dark-nav' : ''}`}>
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li
            onMouseEnter={handleSMEsHover}
            onMouseLeave={handleSMEsLeave}
            className={`dropdown-trigger ${dropdownVisible ? 'active' : ''}`}>

            <ScrollLink to="/hero" smooth={true} offset={0} duration={500}>
              Products
            </ScrollLink>
            <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
              <a href="/products/invoiceDiscounting">
                Invoice Discounting
              </a>
              <br />
              <a href="/products/exportCredits">
                Export Credits
              </a>
              <br />
              <a href="/products/vendorFinancing">
                Vendor Financing
              </a>
              <br />
              <a href="/products/creditCard">
                Credit Cards
              </a>
            </div>
          </li>
          <li>
            <a href="/vision">
              Vision
            </a>
          </li>
          <li>
            <a href="/team">
              Team
            </a>
          </li>
          <li>
          <a href="/blogs">
              Blogs
            </a>
          </li>
          <li>
          <a href="/aboutUs">
              About Us
            </a>
          </li>
          <li>
            <a href="/contactUs">
              Contact Us
            </a>
          </li>
          <li >
            <a href="/login" className='' target="_blank">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-base mb-3  py-2 px-4 rounded-full">
                Login
              </button>
            </a>
          </li>
        </ul>
        <TiThMenu color='white' size={30} className='menu-icon' onClick={toggleMenu} alt="Menu Icon" />
      </nav>
    </div>
  )
}
export default Navbar