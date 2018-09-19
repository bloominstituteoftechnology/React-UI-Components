import React, {Component, Fragment} from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import {FlexRow, FlexColumn} from "../Elements/Flex";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexRow width="full">
                <ImageThumbnail/>
                <FlexColumn style={{marginLeft: "20px"}}>
                    <HeaderTitle />
                    <HeaderContent />
                </FlexColumn>
            </FlexRow>
        )
    }
}

export default HeaderComponent