import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";

 const HeaderTitle = () => {
    const date = new Date(1313564400000)
    const day = date.getDay();
    const month = date.getMonth();
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const timeStamp = `${monthArray[month]} ${day}`
    return (
        <div>
        <strong>Lambda School < / strong>
        <p>@LambdaSchool   - {timeStamp}</p>
            </div> 
    )

}

export default HeaderTitle