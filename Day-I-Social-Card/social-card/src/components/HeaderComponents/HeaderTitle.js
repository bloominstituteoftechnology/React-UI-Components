import React from 'react';
import './Header.css';

let today = new Date().toLocaleDateString('en-GB', {  
	day : 'numeric',
	month : 'short',
})

const HeaderTitle = () => {
    return (
        <div className="Header-Title">
            <h1>Lambda School</h1>
            <p className="stamp">@LambdaSchool • {today}</p>
        </div>
    )
}

export default HeaderTitle;