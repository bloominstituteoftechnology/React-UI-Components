import React, {Component, Fragment} from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import {FlexRow, FlexColumn} from "../Elements/Flex";


class CardContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexColumn className="card-container" width="450px">
                <CardBanner />
                <CardContent />
            </FlexColumn>
        )
    }
}

export default CardContainer