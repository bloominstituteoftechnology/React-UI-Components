import React, {Component, Fragment} from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import {FlexRow, FlexColumn} from "../Elements/Flex";


class HeaderContent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexRow width="400px">
                <p className="header-description">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
            </FlexRow>
        )
    }
}

export default HeaderContent