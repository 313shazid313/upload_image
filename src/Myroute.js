import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read1 from './Read1'
import App from './App'

const Myroute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/read' element = {<Read1/>} />
          <Route path='/' element = {<App/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Myroute
