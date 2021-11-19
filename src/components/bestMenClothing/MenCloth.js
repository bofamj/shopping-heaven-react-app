import React from 'react'
import{useGlobalContext} from '../../context';

const MenCloth = ({description,image,price,title,rating,id}) => {
    const {addToMenCart}= useGlobalContext();
    return (
        <main className='mai-cart'>
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
                    <button onClick={addToMenCart} className='btn' value={id}>ADD TO CART</button>
                </div>
            </section>
            
        </main>
    )
}

export default MenCloth
