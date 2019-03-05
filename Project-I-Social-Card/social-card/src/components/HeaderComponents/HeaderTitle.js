import React from 'react';
import './Header.css';

const HeaderTitle = props => (
    <div className='title-container'>
        <pre className='acnt-name'>{props.title.acnt_name}</pre>
        <pre className='info'>@{props.title.acnt_tag}</pre>
        <pre className='info'>· {props.title.date}</pre>
    </div>
)

export default HeaderTitle