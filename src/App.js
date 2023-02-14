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

  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: posts.length + 1,
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
      {/* Ниже показан управляемый компонент */}
        <MyInput 
          value={ title }
          onChange={ e => setTitle(e.target.value) }
          type="text"
          placeholder="Post new title"
        />
      {/* Ниже показан управляемый компонент */}
      <MyInput
          value={ body }
          onChange={ e => setBody(e.target.value) }
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
