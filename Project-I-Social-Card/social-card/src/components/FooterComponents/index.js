import React from 'react';
import './Footer.css';
import { ReactComponent as Comment } from './comment.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as Repost } from './repost.svg';
import { ReactComponent as Email } from './email.svg';

const Footer = (props) => {
    return <div className="post-footer">
             <Comment />
             <div>
               <Repost />
               <span>
                 {props.reposts}
               </span>
             </div>
             <div>
               <Heart />
               <span>
                 {props.likes}
               </span>
             </div>
             <Email />
           </div>;
};

export default Footer;
