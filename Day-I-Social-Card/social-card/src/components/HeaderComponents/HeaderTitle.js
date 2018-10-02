import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = props => {
    return (
        <div className='title'>
            <h2>Lamdba School</h2>
            <h3>@LamdbaSchool  - 2 Oct</h3>
            <div className="content"><HeaderContent /></div>
        </div>
    )
}
export default HeaderTitle;