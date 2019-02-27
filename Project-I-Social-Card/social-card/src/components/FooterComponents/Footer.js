import React from 'react';
import './Footer.css';

function Icon (props) {
    return (
        <div className='icon-container'>
            <img src={props.src} className='icon-image' alt='' />
            <p className='footer-text'>{props.text}</p>
        </div>
    )
}

function Footer (props) {
    return (
        <footer>
            <Icon src={footerIconsSrc[0]} text={footerText[0]} />
            <Icon src={footerIconsSrc[1]}  text={footerText[1]}/>
            <Icon src={footerIconsSrc[2]}  text={footerText[2]}/>
            <Icon src={footerIconsSrc[3]}  text={footerText[3]}/>
        </footer>
    );
}


const footerIconsSrc = ['https://img.icons8.com/ios/30/000000/speech-bubble.png', 'https://img.icons8.com/ios-glyphs/30/000000/refresh.png', 'https://img.icons8.com/ios/30/000000/hearts.png', 'https://img.icons8.com/ios/30/000000/new-post.png'];
const footerText = ['', '6', '4', ''];

export default Footer;
