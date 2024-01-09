import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'


const Home = () => {
  return (
    <>
    <div className='w-screen h-screen flex'>
      <Navbar/>
      <Cards/>
    </div>
    </>
  )
}

export default Home
