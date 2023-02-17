import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'
import PostFilter from './components/PostFilter.jsx'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "JavaScript Description" },
    { id: 2, title: "Python", body: "aPython Description" },
    { id: 3, title: "Go language", body: "Go language Description" },
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

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
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
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
