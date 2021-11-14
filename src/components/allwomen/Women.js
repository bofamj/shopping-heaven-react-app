import React from 'react'

const Women = ({altImageUrl,prices,productTitle,}) => {
    return (
        <main className='mai-cart'>
            <section className='img-sec'>
                 <img src={altImageUrl} alt={productTitle} />
            </section>
            <section className='describ-sec'>
                <div className='title'>
                    <p>{productTitle}</p>
                </div>
                <div className='rate'>
                    {/* <h3>${prices}</h3> */}
                    {/* <p>rating:    <span>{rating.rate}</span></p> */}
                </div> 
                <div className='rate'>
                    <button>ADD TO CART</button>
                </div>
            </section>
            
        </main>
    )
}

export default Women
