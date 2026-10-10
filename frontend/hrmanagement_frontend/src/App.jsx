import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import About_page from './pages/About_page'
import Contact from './pages/contact'

function App() {
    return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About_page />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
