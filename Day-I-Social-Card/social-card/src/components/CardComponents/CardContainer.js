import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='containerDiv'>
        <CardBanner />
        <CardContent />
        </div>
    );
};

//ReactDOM.render(<CardContainer />, document.getElementById('root'));

export default CardContainer;