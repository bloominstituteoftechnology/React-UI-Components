import React, {Component} from 'react';
import './Button.css';
import {FlexRow} from "../Elements/Flex";
import styled from 'styled-components';

const Number = styled.span.attrs({
    weight: props => props.weight ? "bold" : "normal"
})`
  font-weight: ${props => props.weight}
`;

class ActionButton extends Component {
    constructor(props) {
        super(props);
    }

    setExpression = children => {
        if (children === '=') return this.props.calculate();
        if (children === '÷') return this.props.setExpression("/");
        if (children === 'x') return this.props.setExpression("*");
        this.props.setExpression(children);
    };

    render() {
        const {bold, children} = this.props;
        return (
            <FlexRow justifyCenter alignCenter className="action-button"
                     onClick={() => this.setExpression(children)}>
                <Number weight={bold}>{children}</Number>
            </FlexRow>
        )
    }
}

export default ActionButton