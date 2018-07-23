import React from 'react';
import './Header.css';
import moment from 'moment'; 

let date = Date.now(); 
console.log(date); 

const HeaderTitle = () => {
    return (
        <div className = "header-title">
            <h1 className = "header-heading" >Lambda School</h1>
            <h2 className = "header-subheading">@LambdaSchool</h2>
            <h2 className = "header-subheading-date">{moment(date).format("MMM Do")}</h2>
        </div>
    )
}

export default HeaderTitle; 
