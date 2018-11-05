import React from 'react';
import './Header.css';

//Create a <HeaderTitle /> component that displays the Lambda School header 
//text, @LambdaSchool handle and timestamp.

function HeaderTitle(props){
    return (
        <div className="titles">
            <h1 className="h1">Lambda School </h1>
            <h2 className="h2">@LambdaSchool &middot; 5 nov</h2>
        </div>
    );
}

export default HeaderTitle;