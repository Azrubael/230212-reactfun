import React, { useState } from 'react'
import { Counter } from './components/Counter.jsx'
import ClassCounter from './components/ClassCounter.jsx'
import './styles/App.css'
import PostItem from './components/PostItem.jsx'


function App() {

  const [ value, setValue ] = useState('INPUT TEXT')


  return (
    <div className="App">
      <Counter />
      <PostItem post={{id: 1, title: "Javascript", body: "Description JavaScript"}}/>
      <br /><br /><br />
      <ClassCounter />
      <PostItem post={{id: 2, title: "Go language", body: "Description Go language"}}/>
    </div>
  )
}

export default App
