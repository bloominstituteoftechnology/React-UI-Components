import React from 'react';
import './Header.css';
import moment from "moment"

//Create a <HeaderTitle /> component that displays the Lambda School header 
//text, @LambdaSchool handle and timestamp.

function HeaderTitle(){
    const date = moment().format("MMM Do ");
    return (
        <div className="titles">
            <h1 className="h1">Lambda School </h1>
            <h2 className="h2">@LambdaSchool &middot; {date} </h2>
        </div>
    );
}

export default HeaderTitle;