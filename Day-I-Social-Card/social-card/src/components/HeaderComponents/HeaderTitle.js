import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='container-header'>
            <div className='username'>Lambda School</div>
            <div className='tagname'>@LambdaSchool</div>
            <div className='bullet'>&bull;</div>
            <div className='date'>27 aug</div>
        </div>
    );
};

export default HeaderTitle;