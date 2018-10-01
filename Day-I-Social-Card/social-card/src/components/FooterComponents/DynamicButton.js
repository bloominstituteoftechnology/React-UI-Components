import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DynamicButton = props => {
  let buttonIcon;
  if (props.type === 'comment') {
    // buttonIcon = '<i className="far fa-comment"></i>';
    buttonIcon = <FontAwesomeIcon icon="comment" />;
  } else if (props.type === 'repeat') {
    buttonIcon = '<i className="fas fa-retweet"></i>';
  } else if (props.type === 'like') {
    buttonIcon = '<i className="far fa-heart"></i>';
  } else if (props.type === 'mail') {
    buttonIcon = '<i className="far fa-envelope"></i>';
  };

  return (
    <div>
      {buttonIcon}
    </div>
  );
}

export default DynamicButton;