import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const commentBubble = document.querySelector('.fa-comment');
  console.log(commentBubble);
  
  return (
    <div className="commentBlock">
      <p>{props.value}</p>
    </div>
  )
}

export default Comment;