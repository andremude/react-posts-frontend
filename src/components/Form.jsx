import React, {useState} from 'react'


const Form = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, content };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </>
  )
}

export default Form
