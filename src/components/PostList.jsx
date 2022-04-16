import React from 'react'
import {useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios'


const PostList = () => {

  const [posts, setPosts] = useState([])

  const url = 'http://localhost:3000/api/v1/posts'

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const response = await axios.get(url)
    const data = response.data
    setPosts(data.reverse())
  }

  return (
    <>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}/>
            ))}
      </div>
    </>
  )
}

export default PostList
