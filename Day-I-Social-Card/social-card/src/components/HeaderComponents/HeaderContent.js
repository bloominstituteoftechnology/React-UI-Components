import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

//Create a <HeaderContent /> component that displays the copy provided 
//in the headers content.

function HeaderContent(props){
    return (
        <div className="header-text">
            <HeaderTitle />
            <p className="header-content">
                Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
            </p>
        </div>
    );
}

export default HeaderContent;