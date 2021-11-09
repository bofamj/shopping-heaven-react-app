import React from 'react';
import './hero.css';
import {useGlobalContext} from '../../context';
import imgg from './serves/images/slider_1.jpg'
console.log(imgg);
const Hero = () => {
    const {pradoct,loading,num} = useGlobalContext();
    if(loading){
        return <h1>loading.....</h1>
      } 
      //console.log(pradoct);
    return (
        <main className='hero'>
            <section className='img-hero'>
                <img src={imgg} alt='' />
            </section>
            <section className='hero-text'>
                <h1>NEW SEASON ARRIVALS</h1>
                <h3>CHECK OUT ALL TRENDS</h3>
            </section>
            
        </main>
    )
}

export default Hero
