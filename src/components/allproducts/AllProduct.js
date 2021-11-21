import React from 'react'
import{useGlobalContext} from '../../context';
const AllProduct = ({description,image,price,title,rating,id}) => {
    const {addToAllCart,disabell}= useGlobalContext();
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
                    {/* <button onClick={addToAllCart} className='btn btn-all' value={id} disabled={disabell?true:false}>ADD TO CART</button> */}
                </div>
            </section>
            
        </main>
    )
}

export default AllProduct
