import React from 'react';
import './Header.scss';
import moment from 'moment';

const HeaderTitle = props => {
    return (
        <div>
            <div className = "headline">
                <h1>Lambda School</h1>
                <p className = 'handle'>@LambdaSchool</p>
                <p className = 'timestamp'>{moment().format('D MMM')}</p>
            </div>
            {props.children}
        </div>
    );
}

export default HeaderTitle;