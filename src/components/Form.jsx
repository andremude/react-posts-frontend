import React, {useState} from 'react'


const Form = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="content"
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
      </form>
    </>
  )
}

export default Form
