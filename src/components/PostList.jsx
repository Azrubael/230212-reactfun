import React from "react"
import PostItem from "./PostItem"
import { Counter } from './Counter.jsx'


const PostsList = ({posts, title}) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        { title }
      </h1>
      {posts.map(post => {
        return (<div>
          <Counter />
          <PostItem post={ post } key={ post.id }/>
          <br />
        </div>
        )}
      )}
      
    </div>
  )
}

export default PostsList