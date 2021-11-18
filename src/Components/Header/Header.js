import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="container">
            <div className="nav-bar">
                <div>
                    <h1>Product</h1>
                </div>
            </div>
            <div className="banner">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;