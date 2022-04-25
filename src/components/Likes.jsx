import React, {useState} from 'react'
import '../styles/Likes.css'

const Likes = () => {

  const initialState = {
    like: false,
    likeCount: 0,
    save: false
  }

  const [state, setState] = useState(initialState)

  const changeState = () => {
    setState(prevState => ({
      ...prevState,
      like: !prevState.like, // if i put only true, it will not toggle
      likeCount: prevState.like === false
      ? prevState.likeCount + 1
      : prevState.likeCount -1
    }))
  }

  const changeSaveState = () => {
    setState(prevState=>({
      ...prevState,
      save: !prevState.save
    }))
  }

  const likeState = state.like === false ? "like" : "like_active"

  return (
    <div>
      <div className="likes">
          <span  className={likeState} onClick={changeState} id="like"></span>
          <h4><span>{state.likeCount}</span> Likes </h4>
      </div>
    </div>
  )
}

export default Likes
