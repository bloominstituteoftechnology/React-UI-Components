import React from 'react';
import "./Footer.css";

function strobe(){
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

const Footer = () => {
    return(
        <div className="footer">
            <img src="https://cdn4.iconfinder.com/data/icons/large-black-icons/512/Message_chat_text_bubble_phone.png" alt="comment" />
            <img src="https://cdn.iconscout.com/public/images/icon/premium/png-512/sync-refresh-clockwise-arrows-rotate-reload-synchronization-3be2bb3ee12944c6-512x512.png" alt="refresh" onClick={ () =>{
                window.location.reload();
            }} />
            <img src="https://cdn4.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" className="heart" alt="heart" onClick={ ()=>{
                let element = document.querySelector(".footer .heart");
                element.style.backgroundColor = strobe();
            }}/>
            <img src="https://cdn4.iconfinder.com/data/icons/business-and-finance-vol-2/48/57-512.png" alt="message" />
        </div>
    )
};

export default Footer;