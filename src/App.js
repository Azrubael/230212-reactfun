import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "JavaScript Description" },
    { id: 2, title: "Python", body: "aPython Description" },
    { id: 3, title: "Go language", body: "Go language Description" },
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
        Create a new post
      </MyButton>
      <MyModal visible={modal} setVisble={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={searchedAndSortedPosts} title="THE LIST OF POSTS" />
    </div>
  )
}

export default App
