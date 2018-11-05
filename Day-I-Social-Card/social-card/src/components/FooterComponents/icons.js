import React from 'react' 
import './Footer.css'

function IconsContainer (props){
    return (
        <div class="icons">
            <img src={props.replyIcon}/>
            <img src={props.retweetIcon}/>
            <img src={props.heartIcon}/>
            <img src={props.messageIcon}/>
        </div>
    )
}

export default IconsContainer