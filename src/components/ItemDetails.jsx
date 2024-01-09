import React, { useContext, useState,useEffect } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom';
import axios from '../utils/Axios';
import Loading from './Loading';
import { productDetails } from '../utils/Context'
import { toast } from 'react-toastify';

const ItemDetails = () => {
  const {id} = useParams();
  const {products,setProducts} = useContext(productDetails);
  const [product,setProduct] = useState(null)
  const navigate = useNavigate();


  // const getSingleProduct = async()=>{
  //   try {
  //     const {data} = await axios(`products/${num.id}`)
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(()=>{
    if(product==null){
      setProduct(products.filter((elem)=>elem.id==id)[0]);
    }
  },[])


  const nav = ()=>{
    navigate(-1);
  }

  const handleDelete = () =>{
    setProducts(products.filter((elem)=>elem.id!=product.id))
    localStorage.setItem("products",JSON.stringify(products.filter((elem)=>elem.id!=product.id)));
    toast.info("Item Deleted")
    navigate("/");
  }


  return (
    product===null?<Loading/>:
    <>
    <button onClick={nav} className='border absolute left-[5%] top-[2%] border-blue-400 text-blue-500 px-3 py-2 hover:text-white hover:bg-blue-400 rounded-lg'>Go Back</button>
    <div className='w-[70%] h-screen  m-auto flex items-center justify-between p-10'>
      <div className='w-[50%] h-[70%]'>
        <img className='w-full h-full object-contain' src={product.image} alt="" />
      </div>
      <div className='w-[50%] h-[70%]  flex flex-col items-center px-[5%] py-[10%] gap-5'>
        <h1 className='text-xl font-semibold'>{product.title}</h1>
        <h2 className='opacity-40 uppercase'>{product.category}</h2>
        <h2 className='font-bold'>${product.price}</h2>
        <h2 className='text-sm capitalize'>{product.description}</h2>
        <div className='flex items-center gap-10'>
      <Link to={`/editItem/${product.id}`} className='border border-green-400 text-green-500 hover:text-white hover:bg-green-400 px-3 py-2 rounded-lg'>Edit</Link>
      <button onClick={handleDelete} className='border border-red-400 text-red-500 hover:text-white hover:bg-red-400 px-3 py-2 rounded-lg'>Delete</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default ItemDetails