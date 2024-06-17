import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
export default function Navigation() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
