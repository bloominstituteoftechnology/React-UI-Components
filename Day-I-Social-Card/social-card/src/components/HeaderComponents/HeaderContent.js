import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';

function HeaderContent(){
    return(
        <div className='header'>
        < ImageThumbnail/>
        < HeaderTitle user ='Lambda School' stamp ='@LambdaSchool * 26 jan' post = "Let's learn React by Building simple interfaces with components. Dont try to overthink it, just keep it simple and have fun. Once you feal comfortable using components you are well on your way to mastering React." />
        </div>
            
        
    );
}

export default HeaderContent;