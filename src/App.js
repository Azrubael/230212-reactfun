import React, { useState, useEffect } from 'react'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout( async () => {
        const res = await PostService.getAll()
        setPosts(res)
        setIsPostsLoading(false)
    }, 1000)
  }
  

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <button onClick={ fetchPosts }>GET POSTS</button> */}
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
      
      { isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center'}}>
          <Loader />
          </div>
        : <PostList remove={removePost} posts={searchedAndSortedPosts} title="THE LIST OF POSTS" />
      }
    </div>
  )
}

export default App
