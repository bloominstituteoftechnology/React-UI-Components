import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

// Create a <HeaderTitle /> component that displays the Lambda School header text, @LambdaSchool handle and timestamp.



function HeaderTitle(){

    let date = moment().format("MMM Do");
    
    
        return (

            <div className="title">
                <p className="headerLogo">
                    <h1 className="lamHeader">Lambda School</h1>
                    <h3 className="lambdaSchool">@LambdaSchool &middot; {date} </h3> 
                </p>
                    <HeaderContent />
            </div>
            
        );
    }

export default HeaderTitle;