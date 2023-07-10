import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./globals.css"

// Layouts
import Layout from "./layouts/Layout"
import Home from "./layouts/Home"
import Error from './layouts/error'

// Components
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Work from './components/Work'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} errorElement={<Error/>}/>
        <Route path='/' element={<Layout/>} errorElement={<Error/>}>
          <Route path='/blogs'>
            <Route index element={<Blogs/>}/>
            <Route path=":id" element={<Blog/>}/>
          </Route>
          <Route path='/work/:id' element={<Work/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
