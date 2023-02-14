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

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={ createPost } />
      { posts.length !== 0
        ? <PostList remove={ removePost } posts={ posts } title="THE LIST OF POSTS"/>
        : <div><br /><h3>There is no more posts</h3>
          <ClassCounter />
          </div>
      }
    </div>
  )
}

export default App
