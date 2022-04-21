import React, {useState, useCallback} from 'react'
import '../styles/Form.css'
import axios from 'axios'
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";


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
      setTitle("");
      setContent("");
      // alert("Your post was successfully submitted")

    } catch(error) {
      console.log(error)
    }
  }

  const onClick = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60
    });
  }, []);


  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Title (Max. 300 characters)</label>
          <textarea
            rows="2"
            cols="50"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='title-input'
            placeholder='Enter post title' />
          {/* <input
            type="text"
            name="title"
            maxlength="300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='title-input'
          /> */}
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
            placeholder='Enter post content' />
          {/* <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='content-input'
          /> */}
        </div>
        <button type='submit'
          className='post-btn'
          onClick={onClick}
          >
          <span>🎉</span>
          <span>Submit</span>
        </button>
      </form>
    </div>
  )
}

export default Form
