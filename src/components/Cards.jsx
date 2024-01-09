import React, { useContext, useState,useEffect } from 'react'
import Card from './Card'
import { productDetails } from '../utils/Context';
import Loading from './Loading';
import { useLocation,Link } from 'react-router-dom';
import axios from '../utils/Axios';


const Cards = () => {
  const {products} = useContext(productDetails);

  const {search} = useLocation();

  const category = decodeURIComponent(search.split('=')[1]);

  const [filteredProducts,setFilteredProducts] = useState(products);

  const [show,setShow] = useState(false);

  const getFilteredData = async () =>{
    try {
      setFilteredProducts(products.filter((elem)=>elem.category==category));
      setShow(true);
    } catch (error) {
      console.log(error);
    }

  }

 

  useEffect(()=>{
    if(category!='undefined') getFilteredData();
    else{
      setFilteredProducts(products);
      setShow(false);
    } 
  },[products,category])








  return (products.length>0?
    <>
    <Link to={"/"} className={`absolute px-3 py-2 text-sm left-[18%] ${!show?"hidden":"inline-block"} top-[0%] border border-blue-900 rounded-lg z-10`} >Home</Link>
    <div className='w-[85%] h-full bg-zinc-200 p-10 flex gap-10 flex-wrap overflow-x-hidden'> 
    
    { filteredProducts && filteredProducts.map((item,index)=>{
        return <Card key={index} elem={item}/>
    })}
    </div></>:<Loading/>
  )
}

export default Cards