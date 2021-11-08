import React,{useState,useEffect,useContext} from 'react';


const AppContext = React.createContext();

const API_URL = 'https://fakestoreapi.com/products';

const AppProvider = ({children})=>{
    const [pradoct,setPradoct]=useState([])
  const [num,setNum]=useState(0)
  const [loading,setLoading]=useState(true)
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
        <AppContext.Provider value={{pradoct,loading,num}}>
                {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext}