import React from 'react';
import './Header.scss';
import { italic } from 'ansi-colors';

const HeaderContent = props => {
    return (
        <div className ="headerContent">
            <p>
            Let's learn React by building simple interfaces with components. Don't try to overthink italic, just keep it simple and have function. Once you feel comfortable using components you are well on your way to mastering React.
            </p>
        </div>
    );
}

export default HeaderContent;