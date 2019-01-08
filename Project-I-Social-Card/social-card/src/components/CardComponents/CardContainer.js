import React from 'react';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import './Card.css';

/*  
    PASSABLE PROPS:
    href - The link to the website for this card.
    src - The link to the image to display in the banner.
    title - The title of the card content.
    body - The text content of the card.
    domain - The domain of the card's link.
*/

class CardContainer extends React.Component {
    render() {
        return (
            <a className="card" href={this.props.href}>
                <CardBanner src={this.props.src} altText={"Banner for " + this.props.domain}/>
                <CardContent title={this.props.title} body={this.props.body} domain={this.props.domain} />
            </a>
        )
    }
}

export default CardContainer;
