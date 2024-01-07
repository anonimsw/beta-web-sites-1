import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadelta from './pages/Cadelta'
import Total from './pages/Total'
import Men from './pages/Men'
import Ladies from './pages/Ladies'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cadelta-info' element={<Cadelta />} />
      <Route path='/total-info' element={<Total />} />
      <Route path='/men-info' element={<Men />} />
      <Route path='/ladies-ifno' element={<Ladies />} />
    </Routes>
  )
}

export default App