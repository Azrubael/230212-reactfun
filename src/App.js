import React, { useState, useMemo } from 'react'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/UI/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'
import MyInput from './components/UI/input/MyInput.jsx'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "JavaScript Description" },
    { id: 2, title: "Python", body: "aPython Description" },
    { id: 3, title: "Go language", body: "Go language Description" },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция ортировки постов')
    if (selectedSort) {
      // сортировка копии массива, а не массива напрямую
      // (если выбран параметр сортировки)
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // setPosts() // вроде можно удалить
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' }
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title="THE LIST OF POSTS" />
        : <div><br /><h3>There is no more posts</h3>
          <ClassCounter />
        </div>
      }
    </div>
  )
}

export default App
