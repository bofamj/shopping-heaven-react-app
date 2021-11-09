import React from 'react';
import Hero from '../hero/Hero';
import Category from '../category/Category';

const Home = () => {
    return (
        <main className='home.min'>
            <section className='hero-home'>
                <Hero/>
            </section>
            <section className='cate-home'>
                <Category/>
            </section>
            
        </main>
    )
}

export default Home
