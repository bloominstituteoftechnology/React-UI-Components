import React from 'react';
import './Footer.css';

const Comments = () => {
    return (
        <div className = 'd-flex justify-content-around pt-2'>
        <i className="far fa-comment fa-fw icons" data-fa-transform="flip-h"></i>
            <span>  <i className="fas fa-sync fa-fw icons"></i><p className ='icon-number'>6</p></span> 
            <span>  <i className="far fa-heart fa-fw icons"></i><p className ='icon-number'>4</p></span>
        <i className="far fa-envelope fa-fw icons"></i>
        </div>

    );
}

export default Comments;