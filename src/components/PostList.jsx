import React from 'react'
import {useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios'
import Form from './Form'


const PostList = () => {

  const [posts, setPosts] = useState([])
  const [isUpdate, setUpdate] = useState(false)

  const url = 'http://localhost:3000/api/v1/posts'

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    const response = await axios.get(url)
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
