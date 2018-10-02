import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


const HeaderTitle = () => {
    return (         
        <div className='title'>
            <div className='header-title'>
                <h2>Lambda School</h2>
                <p>@LambdaSchool - 26 Jan</p>
        
            </div>
            <HeaderContent />
        </div>
        
     );
}
 
export default HeaderTitle;
