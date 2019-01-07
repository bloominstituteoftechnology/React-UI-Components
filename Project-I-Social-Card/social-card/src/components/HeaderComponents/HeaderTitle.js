import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = () =>{
    return (
          <div className="flex title-content">
            <h4>Lambda School</h4>
            <p>@LambdaSchool • </p>
            <p>{moment().format("Do MMM ")}</p>
          </div>
    )
}


export default HeaderTitle;