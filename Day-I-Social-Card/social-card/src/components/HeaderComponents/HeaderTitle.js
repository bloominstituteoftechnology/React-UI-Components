import React from 'react';
import './Header.css';
import moment from 'moment'
    


const HeaderTitle = () => {
    return (
    <div className="headerTitle">
        <h1 className="title-h1">Lamda School</h1> <p className="title-handle">@LamdaSchool · {moment().format('D MMM')}</p>
        
    </div>

    )};

export default HeaderTitle
