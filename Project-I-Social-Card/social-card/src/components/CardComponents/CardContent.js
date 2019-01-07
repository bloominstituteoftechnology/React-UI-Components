import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div>
      <h3>{props.post.postTitle}</h3>
      <p>{props.post.postContent}</p>
      <p>{props.post.postLink}</p>
    </div>
  );
}


export default CardContent;