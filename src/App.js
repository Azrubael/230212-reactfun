import React, { useState } from 'react'


function App() {

  const [ likes, setLikes ] = useState(0)
  const [ value, setValue ] = useState('INPUT TEXT')

  function incr(){
    setLikes(likes + 1)
    console.log(likes)
  }
  
  function decr(){
    setLikes(likes - 1)
    console.log(likes)
  }

  return (
    <div className="App">
      <h1>{ likes }</h1>
      <h1>{ value }</h1>
      <input
        type="text"
        value={ value }
        onChange={ event => setValue(event.target.value) }
        />
      <button onClick={ incr }>Increment</button>&nbsp;
      <button onClick={ decr }>Decrement</button>
    </div>
  )
}

export default App
