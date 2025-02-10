import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  )
}

export default App