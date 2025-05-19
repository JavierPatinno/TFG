import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Navegacion from './components/Navegacion'
import Modelos from './pages/Modelos'
import Modelo from './pages/Modelo'

function App() {

  return (
    <>
      <Navegacion/>
      <div className='contenido'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/modelos' element={<Modelos />} />\
          <Route path='/modelos/:modeloID' element={<Modelo/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
