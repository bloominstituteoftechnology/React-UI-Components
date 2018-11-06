import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return(
        <React.Fragment>
            <h2 className='header'>
                {props.title}
            </h2>

            <h3 className='header header-2'>
                {props.title2}
            </h3>
        </React.Fragment>
    );
};


export default HeaderTitle;
