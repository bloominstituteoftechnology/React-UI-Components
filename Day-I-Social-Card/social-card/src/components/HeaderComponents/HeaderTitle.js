import React from 'react';
import './Header.css';

const headerTitle = () => {
    let today = new Date().toISOString().slice(0, 10);
    return (
        <div>
            <p>Lambda School @LambdaSchool, {today}</p>
        </div>
    )
}

export default headerTitle;