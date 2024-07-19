import React from 'react';
import logo from '../../../public/assets/logo/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';



const DashboardNav = () => {
   const location = useLocation()

   return (
      <Navbar collapseOnSelect expand="lg" className="bg-gray-100 lg:z-auto z-50">
         <Container>
            <Navbar.Brand href="/">
               <img
                  alt=""
                  src={logo}
                  width="200"
                  height="200"
                  className="d-inline-block align-top"
               /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
               </Nav>
               <Nav className="lg:bg-transparent bg-blue-200">
                  <Nav.Link
                     href="/dashboard/home"
                     className={`font-bold text-base ${location.pathname === '/dashboard/home' ? 'text-blue-500' : ''} hover:text-blue-400`}
                  >Home
                  </Nav.Link>

                  <Nav.Link
                     href="/dashboard/vendorFinancing"
                     className={`font-bold text-base ${location.pathname === '/dashboard/vendorFinancing' ? 'text-blue-500' : ''} hover:text-blue-400`}
                  >Vendor Financing
                  </Nav.Link>

                  <Nav.Link
                     href="/dashboard/profile"
                     className={`font-bold text-base ${location.pathname === '/dashboard/profile' ? 'text-blue-500' : ''} hover:text-blue-400`}
                  >Profile
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
export default DashboardNav