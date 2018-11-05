import React from 'react';
import './Header.css';

function HeaderContent(props){
    return(
        <div>
            <p className= "text-content">{props.text}</p>
        </div>
    );
}
export default HeaderContent;