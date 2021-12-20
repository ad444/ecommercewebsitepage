import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/Company_Logo.png';
const Navbar = () => {
    return (
        <div className='container-fluid' id='navbar'>
            <div className='row'>
                <div className='col-3'>
                    <Link to='/'><img id="companyLogo" src={Logo} alt='company_logo' />
                    <p id="companyTitle"><span id="companyNameFirstLetter">E-</span>Shop</p></Link>
                </div>
                <div className='col-6'>
                    <ul id="navbarLinkContainer">
                        <li className="navbarLinks"><span class="navbarLinkText">Men</span></li>
                        <li className="navbarLinks"><span class="navbarLinkText">Women</span></li>
                        <li className="navbarLinks"><span class="navbarLinkText">Kids</span></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul id="iconsContainer">
                        <li className="icons"><i class="fas fa-search icon"></i></li>
                        <li className="icons"><i class="fas fa-shopping-cart icon"></i></li>
                        <li className="icons"><i class="fas fa-user icon"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
