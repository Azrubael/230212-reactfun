import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostList from './components/PostList.jsx'


function App() {

  const [ posts, setPosts ] = useState([
    {id: 1, title: "Javascript", body: "Description JavaScript"},
    {id: 2, title: "Go language", body: "Description Go language"},
    {id: 3, title: "Pithon", body: "Description Pithon"}
  ])


  return (
    <div className="App">
      <PostList posts={ posts } />
      <ClassCounter />
    </div>
  )
}

export default App
