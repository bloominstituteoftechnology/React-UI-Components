import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
    function redirectToReact() {
        window.location.href = "https://www.reactjs.org";
    }
    
    return (
        <div className='cardCont' onClick={redirectToReact}>
            <div className='subCardCont'>
                <CardBanner/>
                <CardContent/>
            </div>
        </div>
    );
};

export default CardContainer