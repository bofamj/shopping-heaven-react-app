import React from 'react';
import './nav.css';
import { HiShoppingCart } from 'react-icons/hi';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import {useGlobalContext} from "../../context"


const Nav = () => {

    const {setScroll,scroll}=useGlobalContext();
    const handelScroll = ()=>{
        if(window.scrollY >= 3 ){
          setScroll(true)
        }else{
          setScroll(false)
        }
      }
      handelScroll()
    return (
        <header className={scroll ? 'header header-scrol' :'header'}>
            <section className='logo'>
                <Link className='link' to="/"><h1>SHOPPING <span>HEAVEN</span></h1></Link>
            </section>
            <nav className='nav-bar'>
                <ul>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/about">Abou</Link></li>
                    <li><HiShoppingCart /></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Nav
