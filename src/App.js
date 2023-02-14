import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'


function App() {

  const [ posts, setPosts ] = useState([
    {id: 1, title: "Javascript", body: "Description JavaScript"},
    {id: 2, title: "Go language", body: "Description Go language"},
    {id: 3, title: "Python", body: "Description Python"}
  ])

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ])
  }


  return (
    <div className="App">
      <PostForm create={ createPost } />
      <PostList posts={ posts } title="THE LIST OF POSTS"/>
      <br />
      <ClassCounter />
    </div>
  )
}

export default App
