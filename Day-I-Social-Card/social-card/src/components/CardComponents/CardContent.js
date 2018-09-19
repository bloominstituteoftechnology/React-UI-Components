import React, {Component, Fragment} from 'react';
import './Card.css';
import {FlexRow, FlexColumn} from "../Elements/Flex";


class CardContent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexColumn padding={10}>
                <div className="title">Get started with React</div>
                <div className="description">React makes it painless to create interactive UIs. Design simple views for each state in your application.</div>
                <div className="url">reactjs.org</div>
            </FlexColumn>
        )
    }
}

export default CardContent