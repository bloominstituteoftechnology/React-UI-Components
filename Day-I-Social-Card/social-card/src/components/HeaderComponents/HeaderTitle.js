import React from 'react';
import './Header.css';

function HeaderTitle(props){
    return(
        <React.Fragment>
            <div className='title'>
                <h4>{props.user}</h4>
                <p className='time-stamp'>{props.stamp}</p>
            </div>
            <p>{props.post}</p>
        </React.Fragment>
    );
}

export default HeaderTitle;