import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn';
const App=()=>{
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
  )
}
export default App;