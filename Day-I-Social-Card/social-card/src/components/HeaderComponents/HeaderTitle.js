import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className ="hTitle">
            <h5>
                LambdaSchool
            </h5>
            <h6>
                @LambdaSchool 
            </h6>
            <h6>
                &middot;
            {moment().format("DD MMM")}
            </h6>
        </div>
    )
}

export default HeaderTitle;