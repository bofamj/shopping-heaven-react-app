import React from 'react';
import im1 from '../hero/serves/images/banner_1.jpg';
import im2 from '../hero/serves/images/banner_2.jpg';
import im3 from '../hero/serves/images/banner_3.jpg';
import './category.css';

export default function Category() {
    return (
        <main className="cat-min">
            <section className='cate-section'>
                <img src={im1} alt="" />
                <h3 className='cate-title'>women's</h3>
            </section>
            <section className='cate-section'>
                <img src={im2} alt="" />
                <h3 className='cate-title'>jewelery</h3>
            </section>
            <section className='cate-section'>
                <img src={im3} alt="" />
                <h3 className='cate-title'>men's</h3>
            </section>
            
        </main>
    )
}
