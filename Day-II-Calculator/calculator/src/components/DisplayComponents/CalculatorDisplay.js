import React, {Component} from 'react';
import './Display.css';
import {FlexRow} from "../Elements/Flex";

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlexRow justifyEnd alignCenter className="display">
                <span className="number">0</span>
            </FlexRow>
        )
    }
}

export default Display