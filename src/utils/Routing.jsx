import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ItemDetails from '../components/ItemDetails'
import Cards from '../components/Cards'
import Create from '../components/Create'
import EditItem from '../components/EditItem'

const Routing = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/item/:id' element={<ItemDetails/>}/>
        <Route path='/editItem/:id' element={<EditItem/>}/>
      </Routes>
  )
}

export default Routing
