import React, { useState } from 'react'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'

const PostForm = ({ create }) => {
  const [ post, setPost ] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { ...post, id: Date.now() }
    create(newPost)
    setPost({ title: '', body: '' })
  }



  return (
    <div>
      <form>
      {/* Ниже показан управляемый компонент */}
        <MyInput 
          value={ post.title }
          onChange={ e => setPost({ ...post, title: e.target.value }) }
          type="text"
          placeholder="Post new title"
        />
      {/* Ниже показан управляемый компонент */}
      <MyInput
          value={ post.body }
          onChange={ e => setPost({ ...post, body: e.target.value }) }
          type="text"
          placeholder="Post new description"
          />
        <MyButton disabled={ false } onClick={ addNewPost }>Create post</MyButton>
      </form>

    </div>
  );
};

export default PostForm;