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
    {id: 3, title: "Pithon", body: "Description Pithon"}
  ])

  const [ posts2, setPosts2 ] = useState([
    {id: 1, title: "Java", body: "Description for Java"},
    {id: 2, title: "Scala", body: "Description for Scala"},
    {id: 3, title: "C#", body: "Description for C#"}
  ])

  const [ title, setTitle ] = useState('I <3 programming')
  const addNewPost = () => {

  }


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post title" />&nbsp;
        <input type="text" placeholder="Post description" />&nbsp;
        <button>Create post</button>
      </form>
      <form>
      {/* Ниже показан управляемый компонент */}
        <MyInput 
          value={ title }
          type="text"
          placeholder="Post new title"
        />
        <MyInput type="text" placeholder="Post new description" />
        <MyButton disabled={ true } onClick={ addNewPost }>Create post</MyButton>
      </form>
      <PostList posts={ posts } title="FIRST LIST OF POSTS"/>
      <br />
      <PostList posts={ posts2 } title="SECOND LIST OF POSTS"/>
      <ClassCounter />
    </div>
  )
}

export default App
