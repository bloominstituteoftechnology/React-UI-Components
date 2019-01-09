import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <React.Fragment>
            <h2 className='head-title'>Lambda School <span className='atLambda'>@LambdaSchool</span> <span className='dot'>•</span><span className="date">07 jan</span></h2>
        </React.Fragment>
    );
}

export default HeaderTitle;
