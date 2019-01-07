import React from 'react';
import './Card.css';

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  return (
    <div>
      <CardBanner postImage={props.post.postImage} />
      <CardContent post={props.post}/>
    </div>
  );
}

export default CardContainer;