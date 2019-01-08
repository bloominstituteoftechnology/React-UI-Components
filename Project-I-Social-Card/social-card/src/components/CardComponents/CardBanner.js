import React from 'react';
import './Card.css';

/*  
    PASSABLE PROPS:
    src - The link to the image to display in the banner.
    altText - The alt text to append to the image.
*/

class CardBanner extends React.Component {
    render() {
        return ( <img className="card-banner" src={this.props.src} alt={this.props.altText} /> );
    }
}

export default CardBanner;
