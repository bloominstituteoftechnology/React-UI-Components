import React from 'react';
import './Footer.css';

const icons = [
    {
        id: 1,
        name: 'icon-image comment',
        eventFunction: commentClicked,
        src: 'https://img.icons8.com/ios/30/000000/speech-bubble.png',
        text: null,
    },
    {
        id: 2,
        name: 'icon-image refresh',
        eventFunction: refreshClicked,
        src: 'https://img.icons8.com/ios-glyphs/30/000000/refresh.png',
        text: 6,
    },
    {
        id: 3,
        name: 'icon-image heart',
        eventFunction: heartClicked,
        src: 'https://img.icons8.com/ios/30/000000/hearts.png',
        text: 4,
    },
    {
        id: 4,
        name: 'icon-image envelope',
        eventFunction: envelopeClicked,
        src: 'https://img.icons8.com/ios/30/000000/new-post.png',
        text: null,
    }
];

function commentClicked() {
    const commentIcon = document.querySelector('.comment');
    if (commentIcon.style.opacity === '0.5') {
        commentIcon.style.opacity = '1';
        commentIcon.style.transform = 'none';
        commentIcon.style.width = '35%';
    } else {
        commentIcon.style.opacity = '0.5';
        commentIcon.style.transform = 'scaleX(-1)';
        commentIcon.style.width = '25%';
    }
}

function refreshClicked() {
    console.log("Refresh Clicked!");
}

function heartClicked() {
    console.log("Heart Clicked!");
}

function envelopeClicked() {
    console.log("Envelope Clicked!");
}

function Icon (props) {
    const { icon } = props;
    return (
        <div onClick={icon.eventFunction} className='icon-container'>
            <img src={icon.src} className={icon.name} alt={icon.name} />
            <p className='footer-text'>{icon.text}</p>
        </div>
    )
}

function Footer (props) {
    return (
        <footer>
            {icons.map(icon => (<Icon icon={icon} key={icon.id} />))}           
        </footer>
    );
}

export default Footer;