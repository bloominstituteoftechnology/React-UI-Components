import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {

    return(
        <div className="card-container">
            <div className="card-box">
                <CardBanner src={"https://ibin.co/3wnC6SgIOJud.png"} />
                <CardContent cardTitle={"Get started with React"} />
            </div>
        </div>
    );
}


export default CardContainer;