import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className="cardContent">
            <div className="articleTitle">{props.articleTitle}</div>
            <div className="articleText">{props.articleText}</div>
            <div className="articleLink">{props.articleLink}</div>
        </div>
    );
};

export default CardContent;