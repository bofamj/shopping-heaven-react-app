import React from 'react'
import{useGlobalContext} from '../../context';
import Cart from './Cart'
import './cart.css'

const Carts = () => {
    const {cart,loading,clearCart,cartTotal}= useGlobalContext();

    
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

            <section>
                <h5>total amount :${cartTotal} </h5>
            </section>
            <main className='women-min cart-min'>
            
            
                {cart.map((cloth)=>{
                    //console.log(cloth);
                    return <Cart key={cloth.id} {...cloth}/>
                })}
            </main>
            <section>
                <button onClick={clearCart} className='clear btn'>Clear Cart</button>
            </section>
        </>
    )
}

export default Carts
