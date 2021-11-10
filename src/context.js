import React,{useState,useEffect,useContext} from 'react';


const AppContext = React.createContext();
const men = `men's clothing`
const API_URL = 'https://fakestoreapi.com/products';
const API_SURT = `https://fakestoreapi.com/products/category/{men}`;

const AppProvider = ({children})=>{
  const [pradoct,setPradoct]=useState([]);
  const [num,setNum]=useState(0);
  const [loading,setLoading]=useState(true);
  const [scroll,setScroll]=useState(false);
  // changung the b=nave shado on scroll

  
  const fetchApi = async()=>{
    setLoading(true)
    const response= await fetch(API_URL)
    const data = await response.json()
    //console.log(data[0].image)
    setPradoct(data)
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
        <AppContext.Provider value={{pradoct,loading,num,setScroll,scroll}}>
                {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext}