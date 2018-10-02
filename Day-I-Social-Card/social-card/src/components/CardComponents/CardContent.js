import React from 'react';



const CardContent = props => {

    return(
        <div className="card-content-container">
            <h2 className="card-title">{props.cardTitle}</h2>
            <p className="card-txt">{props.cardContent}</p>
            <a href="" className="card-link">{props.cardLink}</a>
        </div>
    );
}

export default CardContent;