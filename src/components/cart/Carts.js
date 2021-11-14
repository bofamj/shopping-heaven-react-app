import React from 'react'
import{useGlobalContext} from '../../context';
import Cart from './Cart'

const Carts = () => {
    const {cart,loading}= useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    return (
        <main className='women-min'
        >
        
        
            {cart.map((cloth)=>{
                //console.log(cloth);
                return <Cart key={cloth.id} {...cloth}/>
            })}
        </main>
    )
}

export default Carts
