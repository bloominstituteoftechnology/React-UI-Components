import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DynamicButton = props => {
  if (props.type === 'comment') {
    // buttonIcon = '<i className="far fa-comment"></i>';
    return(<div><FontAwesomeIcon icon="comment" /></div>);
  } else if (props.type === 'repeat') {
    return(<div><FontAwesomeIcon icon="retweet" /></div>);
  } else if (props.type === 'like') {
    return(<div><FontAwesomeIcon icon="heart" /></div>);
  } else if (props.type === 'mail') {
    return (<div><FontAwesomeIcon icon="envelope" /></div>);
  };

}

export default DynamicButton;