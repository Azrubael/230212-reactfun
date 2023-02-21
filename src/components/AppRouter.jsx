import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import ErrorPage from './UI/ErrorPage/ErrorPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={ <About/>} />
      <Route path="/posts" element={ <Posts/>} />
      <Route path="/" element={ <Posts/>} />
      <Route path="*" element={ <ErrorPage/>} />
    </Routes>
  )
}

export default AppRouter