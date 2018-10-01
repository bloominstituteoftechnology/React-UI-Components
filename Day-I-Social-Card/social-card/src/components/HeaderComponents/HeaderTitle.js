import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return(
        <header className="header-title">
            <h1 className="title">Lambda School</h1>
            <h2 className="gray-elements">@LambdaSchool</h2>
            <h2 className="gray-elements">· 01 oct</h2>
        </header>
    )
}

export default HeaderTitle
