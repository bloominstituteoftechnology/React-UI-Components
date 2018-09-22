import React from 'react';
import './Card.css';


const CardContent = (props) => {
    return (
        <section className='card-content-container'>
            <p className='title'>{props.postTitle}</p>
            <section className='paragraph'>
                <p>{props.postMainText}</p>
            </section>
            <p className='tag'>{props.postUrl}</p>
        </section>
    );
};

export default CardContent;