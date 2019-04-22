import React from 'react';
import './Footer.css';

import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { MdSync, MdMailOutline } from 'react-icons/md';

function Footer() {
  return (
    <div className="Footer">
      <FaRegComment className="Footer__icon" color="#8899A6" size="20px" />
      <MdSync className="Footer__icon" color="#8899A6" size="22px" />
      <FaRegHeart className="Footer__icon" color="#8899A6" size="20px" />
      <MdMailOutline className="Footer__icon" color="#8899A6" size="22px" />
      <div />
    </div>
  );
}

export default Footer;
