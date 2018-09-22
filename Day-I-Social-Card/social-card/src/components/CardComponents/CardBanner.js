import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return (
        <section>
            <img className="banner" src={props.banner}></img>
        </section>
    );
};

export default CardBanner;



