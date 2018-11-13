import React, { Component } from 'react';
import './Card.css'

import Banner from './CardBanner';
import Cardcontent from './CardContent';
class Card extends Component {

    render() {
        return (
            <div className="bannerborder">
                <Banner />
                <Cardcontent />
            </div>
        );
    }

}

export default Card;
