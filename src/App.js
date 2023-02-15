import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'


function App() {

  const [ posts, setPosts ] = useState([
    {id: 1, title: "Javascript", body: "JavaScript Description"},
    {id: 2, title: "Python", body: "aPython Description"},
    {id: 3, title: "Go language", body: "Go language Description"},
  ])
  const [ selectedSort, setSelectedSort ] = useState('')

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ])
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // сортировка копии массива, а не массива напрямую
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={ createPost } />
      <hr style={{margin: '15px 0'}}/>
      <div> 
        <MySelect 
          value={ selectedSort }
          onChange={ sortPosts }
          defaultValue="Sorting"
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]}
        />
      </div>
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
