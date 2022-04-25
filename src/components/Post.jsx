import React from 'react'
import '../styles/Post.css'
import Likes from './Likes'

const Post = ({title, content}) => {
  return (
    <div className='post-container'>
      <h2>{title}</h2>
      <p>{content}</p>
      <Likes />
    </div>
  )
}

export default Post
