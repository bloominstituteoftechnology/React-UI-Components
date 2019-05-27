import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
const headerTitle = 'Lambda School';
const headerHandle = '@LambdaSchool';
const headerDate = '26 Jan'


function HeaderContent ({ text }) {
    return (
        <div>
            <HeaderTitle text={headerTitle} handle={headerHandle} timestamp={headerDate} />
            <p>{text}</p>
        </div>
    )
}

export default HeaderContent;
