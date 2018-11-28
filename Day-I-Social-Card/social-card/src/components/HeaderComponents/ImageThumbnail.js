import React from 'react';
import './Header.css';

const imageThumbnail = (props) => {
  return (
    <img src={ require('./lambdaIcon.jpg') } alt="Lambda Icon"></img>
  );
};

export default imageThumbnail;