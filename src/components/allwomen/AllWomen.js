import React from 'react';
import {useGlobalContext} from '../../context';
import Women from './Women';


const AllWomen = () => {
    const{loading,allWomen}=useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    console.log(allWomen);
    return (
        <main className='women-min'>
            {allWomen.map((cloth)=>{
                //console.log(cloth);
                return <Women key={cloth.id} {...cloth}/>
            })}
        </main>
    )
}

export default AllWomen
