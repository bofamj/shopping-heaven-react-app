import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';


const AppContext = React.createContext();
const men = `men's clothing`;
const women = `women's clothing`;
const API_URL = 'https://fakestoreapi.com/products';
const API_SURT = `https://fakestoreapi.com/products/category/${men}`;
const API_WOM = `https://fakestoreapi.com/products/category/${women}`;

const AppProvider = ({children})=>{
  //all products
  const [pradoct,setPradoct]=useState([]);
  const [num,setNum]=useState(0);
  //loding
  const [loading,setLoading]=useState(true);
  //cheking the scroll for the navbar changing
  const [scroll,setScroll]=useState(false);
  // women menClothing
  const [womenClothing,setWomenClothing]=useState([]);
  //men clothing
  const [menClothing,setMENclothing]=useState([]);
  //all women clothing
  const [allWomen,setAllWomen]=useState([]);
  //all products 
  const [allProducts,setAllProducts]=useState([]);
  //cart component
  const [cart,setCart]=useState([])
  //amount state
  const [amount,setAmount]=useState(1)
  //disabell adding to cart
  const [disabell,setDisabell]=useState(false)
  //add items 
  const addItemAmount = ()=>{

  }
  //sutrac item
  //clear cart 
  const clearCart = ()=>{
    setCart([])
  }
  // add mome clothing to cart functions
  /* const addToCart = e =>{
    let cart2 =[...cart]
    
    const cloth =  womenClothing.filter((item) =>{
      
      if(item.id == e.target.value){
        
        return item
      }
      //setDisabell(true)
    })
    cart2.push(cloth);
    
    setCart(cart2);
    
  } */
  //add the men clothing to the cart
  const addToMenCart = e =>{
    let cart3 =[...cart]
    const cloth =  menClothing.filter((item) =>{
      if(item.id === e.id){
        //console.log(e.id);
        return item
      }
    })
    cart3.push(cloth);
    setCart(cart3);
  }
  console.log(cart);
  //add all products to cart 
  /* const addToAllCart = e =>{
    let cart4 =[...cart]
    const cloth =  allProducts.filter((item) =>{
      if(item.id == e.target.value){
        return item
      }
    })
    cart4.push(cloth);
    setCart(cart4);
  } */
  //delet one item for cart function
  const handelDelet = (id)=>{
    //console.log(id);
    let nweCartItem = cart.filter((i)=>i[0].id !== id)
    //console.log(nweCartItem);
    setCart(nweCartItem)
  }
  
  const fetchApi = async()=>{
    try {
      const menClothing = axios.get(API_SURT);
      const womenClothing = axios.get(API_WOM);
      const allProducts = axios.get(API_URL)
      axios.all([menClothing,womenClothing,allProducts])
      .then(
        axios.spread((...response)=>{
          if(response[0].status === 200){
            setMENclothing(response[0].data)
          }
          if(response[1].status === 200){
            setWomenClothing(response[1].data)
          }
          if(response[2].status === 200){
            //console.log(response[2].data);
            setAllProducts(response[2].data)
          }
        })
      )
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
    
    
  useEffect(()=>{
    fetchApi()
  },[])
    return(
        <AppContext.Provider value={{pradoct,loading,num,setScroll,scroll,womenClothing,menClothing,allWomen,cart,addToMenCart,handelDelet,clearCart,disabell,allProducts}}>
                {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext}