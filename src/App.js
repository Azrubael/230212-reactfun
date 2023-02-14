import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import MyButton from './components/UI/button/MyButton.jsx'


function App() {

  const [ posts, setPosts ] = useState([
    {id: 1, title: "Javascript", body: "Description JavaScript"},
    {id: 2, title: "Go language", body: "Description Go language"},
    {id: 3, title: "Python", body: "Description Python"}
  ])

  const [ post, setPost ] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([ ...posts, { ...post, id: Date.now() } ])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
      {/* Ниже показан управляемый компонент */}
        <MyInput 
          value={ post.title }
          onChange={ e => setPost({ ...post, title: e.target.value }) }
          type="text"
          placeholder="Post new title"
        />
      {/* Ниже показан управляемый компонент */}
      <MyInput
          value={ post.body }
          onChange={ e => setPost({ ...post, body: e.target.value }) }
          type="text"
          placeholder="Post new description"
          />
        <MyButton disabled={ false } onClick={ addNewPost }>Create post</MyButton>
      </form>
      <PostList posts={ posts } title="FIRST LIST OF POSTS"/>
      <br />
      <ClassCounter />
    </div>
  )
}

export default App
