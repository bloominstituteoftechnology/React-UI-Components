import React from 'react';
import './Header.css';
import moment from 'moment';

export const HeaderTitle = (props) =>{
    console.log(props);
return <div className="headerTitle">
    <div className="titleBold">Lambda School</div>
    <div className="userName">@LambdaSchool</div>
    <div className="date"> • {getDate()} </div>
    </div>
}

function getDate(){
    return moment().format('D MMM')
}