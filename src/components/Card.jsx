import React from 'react'
import { Link } from 'react-router-dom'
import Routing from '../utils/Routing'

const Card = ({elem}) => {
  return (
    <>
    <Link to={`/item/${elem.id}`} className='w-[16%] h-[35vh] bg-zinc-300 rounded-lg flex flex-col items-center overflow-hidden shrink-0 hover:scale-110 transition-all'> 
      <div className='w-full h-[60%] overflow-hidden'>
        <img className='w-full h-full object-cover object-top scale-90 rounded' src={elem.image} alt="" />
      </div>
      <h1 className='px-2 pt-2 text-sm font-semibold'>{elem.title}</h1>
    </Link>
    </>
  )
}

export default Card