import React,{useEffect} from 'react';
import im1 from '../hero/serves/images/banner_1.jpg';
import im2 from '../hero/serves/images/banner_2.jpg';
import im3 from '../hero/serves/images/banner_3.jpg';
import './category.css';
import { gsap,Bounce, Back, Power2,Power3, Elastic, CSSPlugin } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Category() {
    //let t1 = new TimelineLite ({delay: 0});
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() =>{
        
        gsap.from('.women',{scrollTrigger:{
            trigger:'.women',
            toggleActions:'restart none restart none'},
            opacity: 1, x: -100, duration: 2,ease:Power2}
          );
        gsap.from('.menn',{scrollTrigger:{
            trigger:'.menn',
            toggleActions:'restart none restart none'}
            ,opacity: 1, x: 100, duration: 2,ease:Power2});
        gsap.from('.jewelery',{scrollTrigger:{
            trigger:'.jewelery',
            toggleActions:'restart none restart none'}
            ,opacity: 0, duration: 4,ease:Power2});
    },[])
    return (
        <main className="cat-min">
            <section className='cate-section women'>
                <img src={im1} alt="" />
                <h3 className='cate-title'>women's</h3>
            </section>
            <section className='cate-section jewelery'>
                <img src={im2} alt="" />
                <h3 className='cate-title'>jewelery</h3>
            </section>
            <section className='cate-section menn'>
                <img src={im3} alt="" />
                <h3 className='cate-title'>men's</h3>
            </section>
            
        </main>
    )
}
