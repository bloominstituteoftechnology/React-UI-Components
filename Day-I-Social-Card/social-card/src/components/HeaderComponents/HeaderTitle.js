import React from 'react';
import './Header.css';



const HeaderTitle = () => {
    return (
        <div className='headerTitleContainer'>
            <h1 className='headerMainTitle'>Lambda School</h1>
            <p className='socialName'>@LambdaSchool</p>
            <p className='date'>• 26 Jan</p>
        </div>
    );
};

export default HeaderTitle;