import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(far, fas);
const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon size="lg" icon={['far', 'comment']} />
      <FontAwesomeIcon size="lg" icon={['fas', 'sync']} />
      <FontAwesomeIcon size="lg" icon={['far', 'heart']} />
      <FontAwesomeIcon size="lg" icon={['far', 'envelope']} />
    </div>
  );
};

export default Footer;
