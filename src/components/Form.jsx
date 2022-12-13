import React, {useState} from 'react'
import '../styles/Form.css'
import axios from 'axios'
// import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import confetti from "canvas-confetti";

const Form = ({ updateList }) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPost = { title, content };
    try {
      const res = await axios
      // .post('http://localhost:3000/api/v1/posts'
      .post("https://rails-posts-app.herokuapp.com/api/v1/posts"
      ,{post: dataPost}, {withCredentials: true})
      updateList(res.data)
      setTitle("");
      setContent("");

    } catch(error) {
      console.log(error)
    }
    confetti({
      particleCount: 150,
      spread: 60
    });
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <textarea
            rows="2"
            cols="50"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='title-input'
            placeholder='Enter title' />
        </div>

        <div>
          <label>Content</label>
          <textarea
            rows="10"
            cols="50"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='content-input'
            placeholder='Enter content' />
        </div>
        <button type='submit' className='post-btn'>
          <span>🎉</span>
          <span>Submit</span>
        </button>
      </form>
    </div>
  )
}

export default Form
