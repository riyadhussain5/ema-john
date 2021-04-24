import React from 'react';
import logo from '../../images/logo.png';
import   './Header.css';
const Header = () => {
    return (
        <div className='header' >
            <img src={logo}/>
            <nav>
                <a href='./shop'>Shop</a>
                <a href='./order'>Order</a>
                <a href='./inventory order'>Inventory</a>
            </nav>
        </div>
    );
};

export default Header;