import React from 'react';
import './hero.css';
import {useGlobalContext} from '../../context';
import imgg from './serves/images/slider_1.jpg';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
//console.log(imgg);
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
                <Link className='link' to="/women"><h3>CHECK OUT ALL TRENDS</h3></Link>
            </section>
            
        </main>
    )
}

export default Hero
