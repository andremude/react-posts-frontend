import React from 'react'
import '../styles/Post.css'
import Likes from './Likes'
import MenuPopupState from './MenuPopupState.jsx'
import axios from 'axios'
// import DeleteIcon from '@mui/icons-material/Delete';


const Post = ({title, content, user, id, post, getPosts, currentUser}) => {

  const deletePost = async () => {
    await axios.delete(`http://localhost:3000/api/v1/posts/${id}`, { withCredentials: true })
    getPosts()
  }

  return (
    <div className='post-container'>
      <div className='post-header'>
        <div className='post-title-user'>
          <h2>{title}</h2>
          <span>User id: #{user}</span>
          <br />
          <span>Post id: #{id}</span>
        </div>
        <MenuPopupState className="dots" deletePost={deletePost}/>
      </div>
      <br />
      <br />
      <p>{content}</p>
      <div className='post-footer'>
        {/* <Likes /> */}
        {/* <DeleteIcon onClick={() => deletePost()} className='delete-icon'/> */}
      </div>
      <div className='asterisks'>* * *</div>
    </div>
  )
}

export default Post
