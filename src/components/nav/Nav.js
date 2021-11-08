import React from 'react';
import './nav.css';
import { HiShoppingCart } from 'react-icons/hi';


const Nav = () => {
    return (
        <header className='header'>
            <section className='logo'>
                <h1>SHOPPING <span>HEAVEN</span></h1>
            </section>
            <nav className='nav-bar'>
                <ul>
                    <li>HOME</li>
                    <li>ABUOT</li>
                    <li><HiShoppingCart /></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Nav
