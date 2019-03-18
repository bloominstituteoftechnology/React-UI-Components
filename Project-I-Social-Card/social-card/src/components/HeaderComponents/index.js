import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = (props) => {
    return <div className="post-header">
             <ImageThumbnail src={props.img} />
             <div className="post-header-copy">
               <HeaderTitle name={props.name} username={props.username} date={props.date} />
               <HeaderContent content={props.content} />
             </div>
           </div>;
};

export default HeaderContainer;
