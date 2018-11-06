import React from 'react';
import './Footer.css';





function FooterContainer(props) {
    let RTnum = (Number(props.RT));
    function RTClicked(){
        RTnum += 1;
        console.log(RTnum);
    }
 
    return(
        <div className="footer">
            <p>comment</p>
            <p onClick={RTClicked}>RT: {RTnum}</p>
            <p>Likes: {props.likes}</p>
            <p>DM</p>
        </div>

    );
}

export default FooterContainer;