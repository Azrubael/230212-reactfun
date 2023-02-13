import React, { useState } from 'react'

const Counter = function() {
  const [ count, setCount ] = useState(0)

  function incr(){
    setCount(count + 1)
    console.log('Counter:  ', count)
  }
  
  function decr(){
    setCount(count - 1)
    console.log('Counter:  ', count)
  }


  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ incr }>Increment</button>&nbsp;
      <button onClick={ decr }>Decrement</button>
    </div>
  )
}

export { Counter }