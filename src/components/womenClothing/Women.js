import React from 'react'
import{useGlobalContext} from '../../context';
import WomenCloth from './WomenCloth';
import './women.css';

const Women = () => {
    const {womenClothing,loading}= useGlobalContext();
    if(loading){
        return <h1>loading....</h1>
    }
    return (
        <main className='women-min'>
            {womenClothing.map((cloth)=>{
                console.log(cloth);
                return <WomenCloth key={cloth.id} {...cloth}/>
            })}
        </main>
    )
}

export default Women
