import React from 'react';
import './Card.css';

const CardContainer = () => (
    <div className="CardContainer" onClick={(e) => {
        e.stopPropagation();
        window.open("https://www.reactjs.org");
    }}>

    </div>
)

export default CardContainer;