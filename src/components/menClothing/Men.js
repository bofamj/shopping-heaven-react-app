import React from 'react';
import imgg from '../hero/serves/images/nordwood-themes-eGHlWS-zQSM-unsplash.jpg';
import './men.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Men = () => {
    
    return (
        <main className='men'>
            <section className='img-men'>
                <img src={imgg} alt='' />
            </section>
            <section className='hero-text-men'>
                <h1>BEST MEN CLOTHING</h1>
                <Link className='link' to="/men"><h3>CHECK OUT HERE</h3></Link>
            </section>
            
        </main>
    )
}

export default Men
