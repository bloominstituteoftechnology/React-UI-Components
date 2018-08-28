import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    return(
        <div className="flex-head" >
            <div className="title-container" >
                <p className="title" >Lambda School</p>
            </div>
            <div>
                <p className="athandle" >@LambdaSchool 26 Jan </p>
            </div>
            
             
        </div>
    );
};
    

export default HeaderTitle;