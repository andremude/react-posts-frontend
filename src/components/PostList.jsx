import React from 'react'
import {useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios'
import Form from './Form'
import '../styles/PostList.css'


const PostList = () => {

  const [posts, setPosts] = useState([])
  const [isUpdate, setUpdate] = useState(false)

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/posts', { withCredentials: true })
    const data = response.data
    setPosts(data.reverse())
  }



  const updateList = (Post) => {
    let list = posts;
    list.unshift(Post);
    setPosts(posts);

    setUpdate(true)
  }

  return (
    <>
    <Form updateList={updateList}/>
      <div className='post-list-container'>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            user={post.user_id}
            // user={users.find(
            //   user =>
            //   post.userid === user.id
            // )}
              />
            ))}
      </div>
    </>
  )
}

export default PostList
