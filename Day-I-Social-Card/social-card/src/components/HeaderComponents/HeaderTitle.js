import React, {Component, Fragment} from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import {FlexRow, FlexColumn} from "../Elements/Flex";


class HeaderTitle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexRow>
                <div className="name">Lambda School</div>
                <div className="tag">@LambdaSchool</div>
                <div className="date">26 jan</div>
            </FlexRow>
        )
    }
}

export default HeaderTitle