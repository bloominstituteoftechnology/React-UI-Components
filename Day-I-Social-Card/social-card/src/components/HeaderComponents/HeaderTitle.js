import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
// import moment from "moment";
// const time = moment();

const HeaderTitle = () => {
    return (
    <div className="lambda-header-wrap">
        <div className="lambda-title">
            Lambda School
            {/* <span className="time-stamp">{time.format("MMM Do ")}</span> */}
            <HeaderContent />
        </div>
    </div>
 );
};

export default HeaderTitle;