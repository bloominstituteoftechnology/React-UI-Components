import React from "react";
import "./Card.css";

const CardContent = props => {
  return (
    <div className="card-content-container">
      <div className="card-content">
        <h4 className="card-content-item">{props.post.postTitle}</h4>
        <p className="card-content-item">{props.post.postContent}</p>
        <p className="card-content-item grey">{props.post.postLink}</p>
      </div>
      
    </div>
  );
};

export default CardContent;
