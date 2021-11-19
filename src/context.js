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
  //cart component
  const [cart,setCart]=useState([])
  //amount state
  const [amount,setAmount]=useState(1)
  //add items 
  const addItemAmount = ()=>{

  }
  //sutrac item
  //clear cart 
  const clearCart = ()=>{
    setCart([])
  }
  // add mome clothing to cart functions
  const addToCart = e =>{
    let cart2 =[...cart]
    
    const cloth =  womenClothing.filter((item) =>{
      
      if(item.id == e.target.value){
        return item
      }
    })
    cart2.push(cloth);
    setCart(cart2);
  }
  //add the men clothing to the cart
  const addToMenCart = e =>{
    //console.log(e.target.value);
    let cart3 =[...cart]
    const cloth =  menClothing.filter((item) =>{
      if(item.id == e.target.value){
        return item
      }
    })
    cart3.push(cloth);
    setCart(cart3);
  }
  //delet one item for cart function
  const handelDelet = (id)=>{
    //console.log(id);
    let nweCartItem = cart.filter((i)=>i[0].id !== id)
    //console.log(nweCartItem);
    setCart(nweCartItem)
  }
  //all porducts api
  /* fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN/?rapidapi-key=3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
		"x-rapidapi-key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */
//fetching prodocts
 /* const options = {
      method: 'GET',
      url: 'https://kohls.p.rapidapi.com/products/list',
      params: {limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
      headers: {
        'x-rapidapi-host': 'kohls.p.rapidapi.com',
        'x-rapidapi-key': '3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6'
      }
    }; 
    axios.request(options).then(function (response) {
      //console.log(response.data.payload.products);
      setAllWomen(response.data.payload.products)
    }).catch(function (error) {
      console.error(error);
    });  */
  const fetchApi = async()=>{
    try {
      const menClothing = axios.get(API_SURT);
      const womenClothing = axios.get(API_WOM);
      axios.all([menClothing,womenClothing])
      .then(
        axios.spread((...response)=>{
          if(response[0].status === 200){
            setMENclothing(response[0].data)
          }
          if(response[1].status === 200){
            setWomenClothing(response[1].data)
          }
        })
      )
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
    //console.log(pradoct[num].image)
    /*  if(num >= 19){
      setNum(0)
    }else{
      setTimeout(() => {setNum(num+1)}, 5000);
    } */
    //console.log(num) 
    
  useEffect(()=>{
    fetchApi()
  },[])
    return(
        <AppContext.Provider value={{pradoct,loading,num,setScroll,scroll,womenClothing,menClothing,allWomen,addToCart,cart,addToMenCart,handelDelet,clearCart}}>
                {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext}