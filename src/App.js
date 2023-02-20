import React from 'react'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import ErrorPage from './components/UI/ErrorPage/ErrorPage'
import Navbar from './components/UI/Navbar/Navbar'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/about" element={ <About/>} />
      <Route path="/posts" element={ <Posts/>} />
      <Route path="/" element={ <Posts/>} />
      <Route path="*" element={ <ErrorPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
