import React, {useState} from 'react'
import axios from 'axios'


const Form = ({ updateList }) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPost = { title, content };

    try {
      const res = await axios
      .post('http://localhost:3000/api/v1/posts', {post: dataPost})

      updateList(res.data)

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Content</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Post</button>
      </form>
    </>
  )
}

export default Form
