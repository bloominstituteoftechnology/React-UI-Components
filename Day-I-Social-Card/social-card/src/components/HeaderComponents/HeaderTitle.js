import React from 'react';
import './Header.css';
import moment from 'moment';

const date = moment().format('Do MMM');
console.log(date);

// const dateSig = new Date();
// const day = dateSig.toDateString().split(" ");

function HeaderTitle(){

    return (
        <div className='header-title'>
            <h1>Lambda School</h1>
            {/* <p>@LambdaSchool · {day[2]} {day[1]}</p> */}
            <p>@LambdaSchool · {date}</p>
        </div>        
    );
}

export default HeaderTitle;