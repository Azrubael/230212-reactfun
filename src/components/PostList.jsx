import React from "react"
import PostItem from "./PostItem"
import ClassCounter from "./ClassCounter"
import { CSSTransition, TransitionGroup } from "react-transition-group"
// import * as uuid from "uuid"


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
    <div >
      <h1 style={{ textAlign: 'center' }}>
        { title }
      </h1>
      <TransitionGroup>
       {posts.map( (post, index) => 
            <CSSTransition
              key={ post.id }
              timeout={500}
              classNames="post">
              <PostItem
                remove={ remove }
                number={ index+1 }
                post={ post }
                />
            </CSSTransition>
      )}
      </TransitionGroup>
    </div>
  )
}

export default PostsList