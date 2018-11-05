import React from 'react';
import './Card.css';

function CardContent (props){
    return(
        <div className='card__text-content'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a className="handle" href='https://www.reactjs.org'>{props.handle}</a>
        </div>
    );
}

export default CardContent;