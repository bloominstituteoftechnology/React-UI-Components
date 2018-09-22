import React from 'react';
import './Card.css';

const CardImg = props => (
        <img className="card-image" src={props.image}></img>
);

export default CardImg;