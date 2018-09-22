import React, {Component} from 'react';
import './Display.css';
import {FlexRow} from "../Elements/Flex";

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {number} = this.props;

        return (
            <FlexRow justifyEnd alignCenter className="display">
                <span className="number">{number}</span>
            </FlexRow>
        )
    }
}

export default Display