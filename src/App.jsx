import { useState } from 'react'
import './App.css'
import State from './components/State'
import Effect from './components/Effect'
import Memo from './components/Memo'
import JSX from './components/JSX'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Memo /> */}
      {/* <JSX /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home cart={cart}  setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
