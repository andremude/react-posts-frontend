import React from 'react'
import '../styles/Post.css'
// import Likes from './Likes'
import Dots from '../images/dots.png'

const Post = ({title, content, user}) => {
  return (
    <div className='post-container'>
      <div className='post-header'>
        <div className='post-title-user'>
          <h2>{title}</h2>
          <span>Posted by: {user}</span>
        </div>
        <img src={Dots} alt="dots" className="dots" />
      </div>
      <br />
      <br />
      <p>{content}</p>
      {/* <Likes /> */}
      <br />

      <div className='asterisks'>* * *</div>
    </div>
  )
}

export default Post
