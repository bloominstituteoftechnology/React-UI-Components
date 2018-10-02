import React from 'react';
import './Header.css';
const HeaderTitle=()=>{
    return(
        <div className="title">
            <h2>Lambda School</h2>
            <p>@LambdaSchool</p>
            <p>{Date.now()}</p>
        </div>
    )
}
export default HeaderTitle;