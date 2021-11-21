import React from 'react'
import AllProduct from './AllProduct'
import{useGlobalContext} from '../../context';

const AllProducts = () => {
    const {allProducts,loading}= useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    return (
        <main className='women-min'
        >
        
        
            {allProducts.map((cloth)=>{
               
                return <AllProduct key={cloth.id} {...cloth}/>
            })}
        </main>
    )
}

export default AllProducts
