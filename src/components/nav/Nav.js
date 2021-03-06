import React from 'react';
import './nav.css';
import { HiShoppingCart } from 'react-icons/hi';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import {useGlobalContext} from "../../context"


const Nav = () => {

    const {setScroll,scroll,cart,totalItems}=useGlobalContext();
    const handelScroll = ()=>{
        //console.log(window.scrollY);
        if(window.scrollY >= 50 ){
          setScroll(true)
        }else{
          setScroll(false)
        } 
      }
      window.addEventListener('scroll', handelScroll)
    return (
        <header className={scroll ? 'header header-scrol' :'header'}>
            <section className='logo'>
                <Link className='link' to="/"><h1>SHOPPING <span>HEAVEN</span></h1></Link>
            </section>
            <nav className='nav-bar'>
                <ul>
                    <li><Link className='link path' to="/">Home</Link></li>
                    <li><Link className='link path' to="/All Products">All Products</Link></li>
                    <Link className='link' to="/cart"><li><HiShoppingCart size='22'/><p className='cart-nom'>{totalItems}</p></li></Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Nav
