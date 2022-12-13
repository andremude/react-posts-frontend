import React from 'react'
import '../styles/Post.css'
import MenuPopupState from './MenuPopupState.jsx'
import axios from 'axios'


const Post = ({title, content, user, id, getPosts}) => {

  const deletePost = async () => {
    // await axios.delete(`http://localhost:3000/api/v1/posts/${id}`
    await axios.delete(`https://rails-posts-app.herokuapp.com/api/v1/posts/${id}`
    , { withCredentials: true })
    getPosts()
  }

  return (
    <div className='post-container'>
      <div className='post-header'>
        <div className='post-title-user'>
          <h2 className='post-title'>{title}</h2>
            <div className='post-user-delete'>
              <p>Posted by: <b>{user}</b></p>
              <MenuPopupState className="dots" deletePost={deletePost}/>
            </div>
        </div>
      </div>
      <br />
      <p>{content}</p>
      <br />
      <div className='asterisks'>* * *</div>
    </div>
  )
}

export default Post
