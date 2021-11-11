import React from 'react';
import {useGlobalContext} from '../../context';
import MenCloth from './MenCloth'

const BestMen = () => {
    const{loading,menClothing}=useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    console.log(menClothing);
    return (
        <main className='women-min'>
            {menClothing.map((cloth)=>{
                console.log(cloth);
                return <MenCloth key={cloth.id} {...cloth}/>
            })}
        </main>
    )
}

export default BestMen
