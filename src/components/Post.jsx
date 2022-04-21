import React from 'react'
import '../styles/Post.css'

const Post = ({title, content}) => {
  return (
    <div className='post-container'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Post
