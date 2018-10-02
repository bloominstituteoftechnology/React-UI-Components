import React from 'react';
import './Card.css';
import reactImg from '../../img/react-atom.png';

const CardBanner = () => {
    return (
        <div className="card-banner">
            <img src={reactImg} alt="React Atom" />
        </div>
    );
};

export default CardBanner;
