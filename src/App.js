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
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'
import Pagination from './components/UI/pagination/Pagination';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit,page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  useEffect(() => { 
    fetchPosts(limit, page)
  }, [])      //    <<<<< ????????  'fetchPosts' и убрать 'page'

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
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
      { postError &&
        <h3 style={{justifyContent: 'center'}}>An error has occurred: ${postError}</h3>
      }
      { isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
          <Loader />
          </div>
        : <PostList remove={removePost} posts={searchedAndSortedPosts} title="THE LIST OF POSTS" />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default App
