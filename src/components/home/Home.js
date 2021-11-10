import React from 'react';
import Hero from '../hero/Hero';
import Category from '../category/Category';
import Serveses from '../serveses/Serveses';
import Men from '../menClothing/Men';
import Foter from './foter/Foter'

const Home = () => {
    return (
        <main className='home.min'>
            <section className='hero-home'>
                <Hero/>
            </section>
            <section className='cate-home'>
                <Category/>
            </section>
            <section className='cate-serves'>
                <Serveses/>
            </section>
            <section className='hero-home'>
                <Men/>
            </section>
            <section className='footer-home'>
                <Foter/>
            </section>
            
        </main>
    )
}

export default Home
