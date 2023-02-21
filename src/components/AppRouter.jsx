import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import ErrorPage from '../pages/ErrorPage'
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={ <About/>} />
      <Route exact path="/posts" element={ <Posts/>} />
      <Route exact path="/posts/:id" element={ <PostIdPage/>} />
      <Route path="/" element={ <Posts/>} />
      <Route path="*" element={ <ErrorPage/>} />
    </Routes>
  )
}

export default AppRouter