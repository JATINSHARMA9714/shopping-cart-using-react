import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { productDetails } from '../utils/Context';
import nextId from "react-id-generator";
import { toast } from 'react-toastify';


const Create = () => {

    const {products,setProducts} = useContext(productDetails);
    const navigate = useNavigate();

    const {register,handleSubmit,reset} = useForm();

    const handleData = (data) =>{
        if(data.title.trim()<4||data.image.trim()<4 || data.category.trim()<5 || data.price.trim()<1 || data.description.trim()<5){
          alert("No Fields should be empty");
          return;
        }
        data.id = nextId();


        setProducts([...products,data]);
        localStorage.setItem("products",JSON.stringify([...products,data]));
        reset();
        toast.success("Item Added Successfully!!")
        navigate("/");
    }



  return (
    <>
    <Link className='absolute left-[28%] top-[5%] border-2 border-zinc-400 p-2 rounded-lg bg-zinc-200 ' to={"/"}>Home</Link>
    <form className='p-[5%] bg-zinc-200 w-screen h-screen flex flex-col gap-4 items-center' onSubmit={handleSubmit(data=>handleData(data))}>
      <h1 className='capitalize text-3xl mb-4'>Add a new Product</h1>
      <input {...register('title')} type="text" placeholder='Title' className='p-3 w-1/2 rounded text-1xl outline-none border-2 border-zinc-300' />
      <input {...register('image')} type="url" placeholder='ImageUrl' className='p-3 w-1/2 rounded text-1xl outline-none border-2 border-zinc-300' />
      <div className='w-1/2 flex gap-4 justify-between'>
      <input {...register('category')} type="text" placeholder='Category' className='p-3 w-1/2 rounded text-1xl outline-none border-2 border-zinc-300' />
      <input {...register('price')} type="number" placeholder='Price' className='p-3 w-1/2  rounded text-1xl outline-none border-2 border-zinc-300' />
      </div>
      <textarea {...register('description')} type="text" placeholder='Description' className='p-3 w-1/2 h-1/4 rounded text-1xl outline-none border-2 border-zinc-300' />
      <input type="submit" value="Submit" className='border-2 rounded-lg text-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer border-blue-300 p-3 w-1/4' />
    </form>
    </>
  )
}

export default Create
