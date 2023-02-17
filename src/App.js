import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "JavaScript Description" },
    { id: 2, title: "Python", body: "aPython Description" },
    { id: 3, title: "Go language", body: "Go language Description" },
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      // сортировка копии массива, а не массива напрямую
      // (если выбран параметр сортировки)
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    //в массив зависимостей передается поисковая строка и отсортированный массив
  }, [filter.query, sortedPosts])

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
        Create new post
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
