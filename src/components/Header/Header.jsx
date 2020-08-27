import React from 'react';
import './Header.css'

const Header = () => {
    return <header className='header'>
        {/*<img*/}
        {/*    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png"*/}
        {/*    alt=""/>*/}
        <a href="http://localhost:3000/profile">
        <img
            src="https://i.ibb.co/F5688gW/logo.jpg"
            alt=""/>
            </a>
    </header>
}



export default Header;