import React from 'react'

const Cart = (cloth) => {
    console.log(cloth);
    return (
        <main className='mai-cart' key={cloth[0].id}>
            <section className='img-sec'>
                <img src={cloth[0].image} alt='cart' />
            </section>
            <section className='describ-sec'>
                <div className='title'>
                    <p>{cloth[0].title}</p>
                </div>
                <div className='rate'>
                    <h3>${cloth[0].price}</h3>
                    <p>rating:    <span>{cloth[0].rating.rate}</span></p>
                </div>
            </section>  
            
        </main>
    )
}

export default Cart
