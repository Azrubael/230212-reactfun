import React from "react"
import PostItem from "./PostItem"


const PostsList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        { title }
      </h1>
      {posts.map( (post, index) => {
        return ( <div key={ post.id.toString() }>
          <PostItem
            remove={ remove }
            number={ index+1 }
            post={ post }
            />
          <br />
        </div>
        )}
      )}
    </div>
  )
}

export default PostsList