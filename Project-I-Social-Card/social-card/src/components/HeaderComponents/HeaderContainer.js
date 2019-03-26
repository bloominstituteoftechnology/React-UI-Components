import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';



const HeaderComponent = (props) => {
  return (
    <div className={props.className}>
      <ImageThumbnail 
      logo={props.logo}
      altText={props.altText} />
      <HeaderTitle
      title={props.title}
      content={props.content}
      identifer={props.identifer}
      date={props.date}  />
    </div>
  );
};

export default HeaderComponent;
