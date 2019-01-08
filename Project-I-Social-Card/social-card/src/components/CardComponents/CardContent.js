import React from 'react';
import './Card.css';

/*  
    PASSABLE PROPS:
    title - The title of the card content.
    body - The text content of the card.
    domain - The domain of the card's link.
*/

class CardContent extends React.Component {
    render() {
        return ( 
            <div className="card-content">
                <h1 className="card-content-title">{this.props.title}</h1>
                <p className="card-content-body">{this.props.body}</p>
                <h2 className="card-content-domain">{this.props.domain}</h2>
            </div>
        );
    }
}

export default CardContent;
