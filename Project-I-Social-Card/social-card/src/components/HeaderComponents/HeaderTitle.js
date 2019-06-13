import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    let fecha = new Date();
    let month = fecha.getMonth();
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    } else if (month === 12) {
        month = monthArr[12]
    }

    return (
        <div>
            <h2>Lambda School</h2>
            <p className='thinFont'>@LambdaSchool {month}</p>
        </div>
    );
};

export default HeaderTitle