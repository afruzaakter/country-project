import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div >
            {/* <div><h2>Country</h2></div> */}
         <div className='navbar'>
         <nav >
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>
         </div>
        </div>
    );
};

export default Header;