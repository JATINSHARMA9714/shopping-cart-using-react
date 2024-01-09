import { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Home from './components/Home'
import Routing from './utils/Routing'
import { Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routing/>
    </>
  )
}

export default App
