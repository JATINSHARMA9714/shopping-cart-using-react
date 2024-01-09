import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios';

export const productDetails = createContext();
const Context = (props) => {


    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products"))||null);

    // const getData = async () =>{
    //     try {
    //       const {data} = await axios("/products")
    //       setProducts(data);
    //     } 
        
    //     catch (error) {
    //       console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //   getData();
    // },[])


  return (
    <productDetails.Provider value={{products,setProducts}}>
      {props.children}
      </productDetails.Provider>
  )
}

export default Context
