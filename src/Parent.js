import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import App from './App';
function Parent() {
  return (
    <div className='parent'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/game" element={<App/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Parent
