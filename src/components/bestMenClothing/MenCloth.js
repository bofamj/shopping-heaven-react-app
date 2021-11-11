import React from 'react'

const MenCloth = ({description,image,price,title,rating}) => {
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
            </section>
            
        </main>
    )
}

export default MenCloth
