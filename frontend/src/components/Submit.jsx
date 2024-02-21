import { useState, useEffect } from 'react';

const submitPost = (post) => {
  fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers here
  },
  body: JSON.stringify({ post })
})
}

const Submit = ({date, from, body}) => {
  const [post, setPost] = useState('');
  return (
    <div style={{marginTop: "30px"}}>
      <h3>Create a new post</h3>
      <textarea onChange={e=>setPost(e.target.value)} value={post}></textarea> <br />
      <input onClick={()=>{submitPost(post);setPost('')}} type="submit"></input>
    </div>
  )
}

export default Submit;