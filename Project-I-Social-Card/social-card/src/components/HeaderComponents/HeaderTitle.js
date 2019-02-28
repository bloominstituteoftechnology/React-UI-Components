import React from 'react';
import './Header.css';
import moment from 'moment';

const date = new Date();
const format = 'D MMM';
let time = moment(date).format(format);
let currentDate = time.toLowerCase();

function HeaderTitle (props) {
    return (
        <div>
            <div className="header-title">
                <h4>{props.title}</h4>
                <p className='small-text'>@{props.title}</p>
                <p className='small-text'>{currentDate}</p>
            </div>
        </div>  
    );
}

export default HeaderTitle;