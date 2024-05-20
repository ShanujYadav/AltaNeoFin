import React from 'react'
import logo from '../../assets/logo.png'


const Header = () => {

    return (
        <nav className="navbar navbar-light bg-white justify-content-between">
            <div className="navbar-brand mx-3">
                <img src={logo} alt="" width='200' />
            </div> 
            <div className="form-inline">
            <i class="fa-solid fa-money-check"></i>
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
            </div>
        </nav>
    )
}
export default Header