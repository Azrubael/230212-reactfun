import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {

  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostsById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostsById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h3>This is a post of page with ID = { params.id }</h3><br/>
      {isLoading 
        ? <Loader /> 
        : <div>
          <h4>{post.id}. {post.title}</h4>
          <p style={{marginTop: 5}}>{post.body}</p>
          <h4 style={{marginTop: 15}}>Comments:</h4>
          {isComLoading
            ? <Loader /> 
            : <div>
              {comments.map(comm => 
                <div style={{marginTop: 5}} key={comm.id}>
                  <h5>{comm.email}</h5>
                  <p>{comm.body}</p>
                </div>
              )}
            </div>
          }
          </div>
      }
      
    </div>  
  )
}

export default PostIdPage