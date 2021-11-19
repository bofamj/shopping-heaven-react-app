import React from 'react'
import{useGlobalContext} from '../../context';
import Cart from './Cart'
import './cart.css'

const Carts = () => {
    const {cart,loading,clearCart}= useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    if(cart.length === 0){
        return (
        <>
            <h1>ther is no items in the cart</h1>
            <h5>last add soume...</h5>
        </>
        )
    }
    return (
        <>
        
            <main className='women-min cart-min'>
            
            
                {cart.map((cloth)=>{
                    //console.log(cloth);
                    return <Cart key={cloth.id} {...cloth}/>
                })}
            </main>
            <section>
                <button onClick={clearCart}>Clear Cart</button>
            </section>
        </>
    )
}

export default Carts
