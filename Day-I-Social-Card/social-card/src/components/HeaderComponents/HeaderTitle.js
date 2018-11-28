import React from 'react';
import './Header.css';
import "moment";

import HeaderContainer from "./HeaderContainer";
const Header=()=>{

    // let today= new Date();
    // let MonthMapper = ["Jan", "Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
    // let dateToDisplay = today.getDate() + " " +   MonthMapper[today.getMonth()];
    var moment = require('moment');
    let timeToDisplay = moment().format("MMM D");
    return(
        <div className="header-title"> <strong>Lambda School </strong> @LamdaSchool . {timeToDisplay} </div>

);
}

export default Header;
