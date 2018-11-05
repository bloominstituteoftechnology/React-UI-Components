import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="HeaderTitle">
           <h1>Lambda School</h1>
           <p>@LambdaSchool</p>
           <p>·</p>
           <p>05 nov</p>
        </div>
    );
};


export default HeaderTitle;