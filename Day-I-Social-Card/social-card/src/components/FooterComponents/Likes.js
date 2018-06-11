import React from 'react';
import './Footer.css';

let likes = 4;

const Likes = () => {
    return (
        <div class="likes">
        <a href="#"><i class="far fa-heart" /></a>
        <label>{likes}</label>
        </div>   
    );
};

export default Likes;