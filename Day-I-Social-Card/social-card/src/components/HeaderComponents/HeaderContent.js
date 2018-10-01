import React from 'react';
import './Header.css';

const HeaderContent = () => {
    return (
        <div className="headerContent">    
            <p><strong>Lambda School</strong> <span className="details">LambdaSchool * 26 Jan</span></p>
            <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you fee comfortable using components you are well on your way to mastering React!</p>
        </div> 
    );
}

export default HeaderContent;