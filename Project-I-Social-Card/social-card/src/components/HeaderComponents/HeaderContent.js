import React from 'react';
import './Header.scss';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
        <div>
            <HeaderTitle />
            <p>
                Let's learn React by building simple interfaces with compoentns. Don't try
                to overthink it. Just keep it simple and have fun. Once you feel comfortable
                using components you are well on your way to mastering React!
            </p> 
        </div> 
    );

}

export default HeaderContent;
