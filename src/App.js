import React from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
// import AppRouter from './components/AppRouter' // не применяется после коммита 'Step #32'
import { AppRouterIndex } from './router/router-index'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    {/* <AppRouter/>   // не применяется после коммита 'Step #32'*/}
    <AppRouterIndex/>  {/* применяется после коммита 'Step #32'*/}
    </BrowserRouter>
  )
}

export default App
