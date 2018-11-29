import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = (props) => {
  return (
    <div className="footer">
      <FontAwesomeIcon icon="comment" />
      <div className="iconNum">
        <FontAwesomeIcon icon="sync" />
        <span>6</span>
      </div>
      <div className="iconNum">
        <FontAwesomeIcon icon="heart" />
        <span>4</span>
      </div>
      <FontAwesomeIcon icon="envelope" />
    </div>
  );
};

export default footer;
