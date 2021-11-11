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

  
  const fetchApi = async()=>{
    setLoading(true)
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
        <AppContext.Provider value={{pradoct,loading,num,setScroll,scroll,womenClothing,menClothing}}>
                {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext}