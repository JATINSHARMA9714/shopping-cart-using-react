import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productDetails } from '../utils/Context';
import { toast } from 'react-toastify';

const EditItem = () => {

    const {products,setProducts} = useContext(productDetails);
    const [product,setProduct] = useState({
        title:"",
        image:"",
        category:"",
        price:"",
        description:"",
        id:""
    });
    const navigate = useNavigate();


    const {id} = useParams();

    useEffect(()=>{
        setProduct(products.filter((elem)=>elem.id==id)[0])
    },[id])

    const handleData = (e) =>{
        e.preventDefault();
        if(product.title.trim()<4||product.image.trim()<4 || product.category.trim()<5 || product.price.length<1 || product.description.trim()<5){
          alert("No Fields should be empty");
          return;
        }

        const prodIndx = products.findIndex((elem)=>elem.id == id);
        const copyData = [...products];
        copyData[prodIndx]={...products[prodIndx],...product};
        setProducts(copyData);
        localStorage.setItem("products",JSON.stringify(copyData));
        navigate("/");
        toast.success("Item Edited Successfully!!")

    }

    const handleChange =(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }





  return (product &&
    <>
    <Link className='absolute left-[28%] top-[5%] border-2 border-zinc-400 p-2 rounded-lg bg-zinc-200 ' to={"/"}>Home</Link>
    <form className='p-[5%] bg-zinc-200 w-screen h-screen flex flex-col gap-4 items-center' onSubmit={handleData}>
      <h1 className='capitalize text-3xl mb-4'>Edit a Product</h1>
      <input  type="text" placeholder="title" name='title' onChange={handleChange} value={product && product.title} className='p-3 w-1/2 rounded text-sm outline-none border-2 border-zinc-300' />
      <input  type="url" placeholder='ImageUrl' name='image' onChange={handleChange} value={product && product.image} className='p-3 w-1/2 rounded text-sm outline-none border-2 border-zinc-300' />
      <div className='w-1/2 flex gap-4 justify-between'>
      <input  type="text" placeholder='Category' name='category' onChange={handleChange} value={product && product.category} className='p-3 w-1/2 rounded text-sm outline-none border-2 border-zinc-300' />
      <input  type="number" placeholder='Price' name='price' onChange={handleChange} value={product && product.price} className='p-3 w-1/2  rounded text-sm outline-none border-2 border-zinc-300' />
      </div>
      <textarea  type="text" placeholder='Description' name='description' onChange={handleChange} value={product && product.description}className='p-3 w-1/2 h-1/4 rounded text-sm outline-none border-2 border-zinc-300' />
      <input type="submit" value="Edit Item" className='border-2 rounded-lg text-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer border-blue-300 p-3 w-1/4' />
    </form>
    </>
  )
}

export default EditItem
