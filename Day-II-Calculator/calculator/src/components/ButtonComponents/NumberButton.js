import React, {Component} from 'react';
import './Button.css';
import {FlexRow} from "../Elements/Flex";
import styled from 'styled-components';

const Number = styled.span.attrs({
    weight: props => props.weight ? "bold" : "normal",
    grow: props => props.grow ? "1" : "unset"
})`
  font-weight: ${props => props.weight};
  flex-grow: ${props => props.grow}
`;

class NumberButton extends Component {
    constructor(props) {
        super(props);
    }

    setExpression = children => {
        if (children === 'clear') return this.props.clear();
        this.props.setExpression(children);
    };

    render() {
        const {bold, children, grow} = this.props;

        return (
            <FlexRow justifyCenter alignCenter grow={grow} className="number-button"
                     onClick={() => this.setExpression(children)}>
                <Number weight={bold}>{children}</Number>
            </FlexRow>
        )
    }
}

export default NumberButton