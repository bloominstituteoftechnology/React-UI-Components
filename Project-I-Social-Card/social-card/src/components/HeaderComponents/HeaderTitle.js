import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    // Javascript that gets the date for the title
    let fecha = new Date();    // fecha is spanish for "date".
    let month = fecha.getMonth();
    let day = fecha.getDate();

    // Array of Months
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // If statements that transform month number into month word
    if (month === 0) {
        month = monthArr[0]
    } else if (month === 1) {
        month = monthArr[1]
    } else if (month === 2) {
        month = monthArr[2]
    } else if (month === 3) {
        month = monthArr[3]
    } else if (month === 4) {
        month = monthArr[4]
    } else if (month === 5) {
        month = monthArr[5]
    } else if (month === 6) {
        month = monthArr[6]
    } else if (month === 7) {
        month = monthArr[7]
    } else if (month === 8) {
        month = monthArr[8]
    } else if (month === 9) {
        month = monthArr[9]
    } else if (month === 10) {
        month = monthArr[10]
    } else if (month === 11) {
        month = monthArr[11]
    }

    return (
        <div className='headTitle'>
            <h2 className='lambdaName'>Lambda School</h2>
            <p className='thinFont'>@LambdaSchool &#xb7; {`${day} ${month}`}</p>
        </div>
    );
};

export default HeaderTitle