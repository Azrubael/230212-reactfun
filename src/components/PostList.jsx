import React from "react"
import PostItem from "./PostItem"


const PostsList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        { title }
      </h1>
      {posts.map( post => {
        return ( <div>
          <PostItem post={ post } key={ posts.id }/>
          <br />
        </div>
        )}
      )}
    </div>
  )
}

export default PostsList