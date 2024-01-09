import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Routing from '../utils/Routing'
import { productDetails } from '../utils/Context'

const Navbar = () => {

  const {products} = useContext(productDetails);
  let distinct = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct = [...new Set(distinct)];
  

  const color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.6)`
  }


  return (
    <>
    <div className=' w-[15%] px-2 py-4 flex flex-col items-center h-full bg-zinc-50'>
      
      <Link className='text-sm p-3 rounded border border-blue-200 text-blue-400' to="/create">Add New Product</Link>
      <hr className='w-[80%] m-5' />

      <h1 className='text-xl font-semibold w-[80%]'>Categories List</h1>
      <ul className='w-[100%] m-5'>

        {distinct.map((item,index)=>{
          return <Link to={`/?category=${item}`} key={index}   className={`w-[100%]  rounded-lg border border-blue-400 uppercase mb-3 text-xs   p-3 flex items-center gap-2`}><span style={{backgroundColor: `${color()}`}}    className='h-[10px] w-[10px]  rounded-full'></span>{item}</Link>
        })}
      </ul>

    </div>
    </>
  )
}

export default Navbar
