import React, { Fragment } from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <Fragment>
            <h2>
                <a href={props.user.profile}>{props.user.name}</a>
            </h2>
        </Fragment>
    );
};

export default HeaderTitle;
