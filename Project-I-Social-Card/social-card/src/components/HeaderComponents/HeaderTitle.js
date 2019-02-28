import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className='HeaderTitle'>

            <h2 className='userName'>
                Lambda School
            </h2>
            <div className='userHandle'>
                @LambdsSchool
            </div>
            <div className='date'>
                <p className='dot'>
                    •
                </p>
                <p className='dayNumber'>
                    26
                </p>
                <p className='monthText'>
                    Jan
                </p>
            </div>

        </div>
    )
}
export default HeaderTitle;