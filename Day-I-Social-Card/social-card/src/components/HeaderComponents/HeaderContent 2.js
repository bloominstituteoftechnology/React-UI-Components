import React from 'react';


const HeaderContent = props => {
        return(
            <div className="header-content">
               <p className="header-content-txt">
                    {props.headerDescription}
                </p>
            </div>
    );
}



export default HeaderContent;