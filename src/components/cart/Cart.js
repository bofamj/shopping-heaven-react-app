import React from 'react'
import{useGlobalContext} from '../../context';
import './cart.css'
//import { FaPlusCircle } from 'react-icons/hi';
import { FaMinusCircle,FaPlusCircle } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';



const Cart = (cloth) => {
   const {id,image,title,price,count}=cloth
    //console.log(cloth);
    const {handelDelet}= useGlobalContext();
    return (
        <main className='cart' key={id}>
            <section className='cart-img'>
                <img src={image} alt='cart' />
            </section>
            <section className='cart-describ'>
                <div className='cart-title'>
                    <p>{title}</p>
                </div>
                <div className='cart-rate'>
                    <h3>${price}</h3>
                </div>
                <div className='cart-amount'>
                    <div className='btn-cart-amount'><FaPlusCircle/></div>
                    <span>{count}</span>
                    <div className='btn-cart-amount'><FaMinusCircle/></div>
                </div>
                <div className='cart-amount'>
                    <div className='btn-cart-delet'onClick={()=>handelDelet(id)} value={id}><RiDeleteBin5Line  /></div>
                </div>
            </section>  
            
        </main>
    )
}

export default Cart
