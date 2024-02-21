import { useState, useEffect } from 'react';

const Post = ({date, from, post}) => {
  return (
    <div style={{marginBottom: "20px"}}>
      <hr />
      {from}<br />
      <div style={{fontSize: 'small', marginBottom: "0px"}}>{date}</div><br />
      {post}<br />
    </div>
  )
}

export default Post;