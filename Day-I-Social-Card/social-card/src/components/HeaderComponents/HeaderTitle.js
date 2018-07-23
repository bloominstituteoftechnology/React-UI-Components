import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = ()=> {
    return (
        <div class="title">
            <h1>Lambda School</h1><small>{moment().format("MMM Do YY")}</small>
        </div>
    );
};

export default HeaderTitle;