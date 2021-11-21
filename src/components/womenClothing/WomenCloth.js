import React from 'react';
import './women.css';
import{useGlobalContext} from '../../context';

const WomenCloth = ({description,image,price,title,rating,id}) => {
    const {addToCart,disabell}= useGlobalContext();
    return (
        <main className='mai-cart' key={id}>
            <section className='img-sec'>
                <img src={image} alt={title} />
            </section>
            <section className='describ-sec'>
                <div className='title'>
                    <p>{title}</p>
                </div>
                <div className='rate'>
                    <h3>${price}</h3>
                    <p>rating:    <span>{rating.rate}</span></p>
                </div>
                <div className='rate'>
                    <button onClick={addToCart} className='btn btn-all' value={id} disabled={disabell}>ADD TO CART</button> 
                </div>
            </section>
            
        </main>
    )
}

export default WomenCloth
