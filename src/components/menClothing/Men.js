import React from 'react';
import imgg from '../hero/serves/images/nordwood-themes-eGHlWS-zQSM-unsplash.jpg'
import './men.css'

const Men = () => {
    return (
        <main className='men'>
            <section className='img-men'>
                <img src={imgg} alt='' />
            </section>
            <section className='hero-text-men'>
                <h1>NEW SEASON ARRIVALS</h1>
                <h3>CHECK OUT ALL TRENDS</h3>
            </section>
            
        </main>
    )
}

export default Men
