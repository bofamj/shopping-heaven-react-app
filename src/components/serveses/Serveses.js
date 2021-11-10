import React,{useEffect} from 'react';
import { FaShippingFast,FaMoneyBillAlt} from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { gsap,Bounce, Back, Power2,Power3, Elastic, CSSPlugin } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import './serveses.css';

const Serveses = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() =>{
        
        gsap.from('.main-serv',{scrollTrigger:{
            trigger:'.main-serv',
            toggleActions:'restart none restart none'},
            opacity: 1, x: -200, duration: 1,ease:Back}
          );
    },[])
    return (
        <main className='main-serv'>
            <section  className='serv-sec'>
             <div>
                    <FaShippingFast color='red' size='4rem'/>
                </div>
                <div>
                    <h2>FREE SHIPPING</h2>
                    <p>Suffered Alteration in Some Form</p>
                </div>
            </section>
            <section  className='serv-sec'>
                <div>
                    <GiReturnArrow color='red' size='4rem'/>
                </div>
                <div>
                    <h2>45 DAYS RETURN</h2>
                    <p>Making it Look Like Readable</p>
                </div>
                
            </section>
            <section  className='serv-sec cach-sec'>
                <div>
                    <FaMoneyBillAlt color='red' size='4rem'/>
                </div>
                <div>
                    <h2>CACH ON DELIVERY</h2>
                    <p>The Internet Tend To Repeat</p>
                </div>
            </section>
            
        </main>
    )
}

export default Serveses
