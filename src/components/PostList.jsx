import React from "react"
import PostItem from "./PostItem"
import ClassCounter from "./ClassCounter"


const PostsList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
        <div>
          <br />
          <h3 style={{textAlign: 'center'}}>Posts not found</h3>
          <ClassCounter />
        </div>
    )
  }

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