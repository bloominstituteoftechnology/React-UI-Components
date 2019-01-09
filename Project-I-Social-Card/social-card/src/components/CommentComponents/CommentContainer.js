import React from 'react';

import './Comment.css';

const CommentContainer = props => {
  const fitCommentHeight = e => {
    const heightVal = +e.currentTarget.style.height.substring(0, e.currentTarget.style.height.length - 2);

    e.currentTarget.style.height =  heightVal > 38 ? heightVal + "px" : "38px";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
  }

  return (
    <div className={props.showComment ? "card__comment" : "card__comment--hidden"}>
      <textarea className="card__comment__textarea" placeholder="Write your comment here...." onChange={fitCommentHeight}></textarea>
    </div>    
  );
};

export default CommentContainer;