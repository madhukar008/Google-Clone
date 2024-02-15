import React from 'react'
import Welcome from './Welcome'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './Component/About/About'
import ShoppingCard from './Component/ShoppingCard/ShoppingCard'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping" element={<ShoppingCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App