import React from "react"
import PostItem from "./PostItem"


const PostsList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        { title }
      </h1>
      {posts.map( (post, index) => {
        return ( <div>
          <PostItem number={ index+1 } post={ post } key={ Date.now() }/>
          <br />
        </div>
        )}
      )}
    </div>
  )
}

export default PostsList