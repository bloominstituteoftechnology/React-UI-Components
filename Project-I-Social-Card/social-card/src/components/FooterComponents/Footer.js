import React from 'react';
import './Footer.css';

const icons = [
    {
        id: 1,
        name: 'icon-image comment',
        textClass: 'footer-text-comment',
        eventFunction: commentClicked,
        src: 'https://img.icons8.com/ios/30/000000/speech-bubble.png',
        text: null,
    },
    {
        id: 2,
        name: 'icon-image refresh',
        textClass: 'footer-text-refresh',
        eventFunction: refreshClicked,
        src: 'https://img.icons8.com/ios-glyphs/30/000000/refresh.png',
        text: 6,
    },
    {
        id: 3,
        name: 'icon-image heart',
        textClass: 'footer-text-heart',
        eventFunction: heartClicked,
        src: 'https://img.icons8.com/ios/30/000000/hearts.png',
        text: 4,
    },
    {
        id: 4,
        name: 'icon-image envelope',
        textClass: 'footer-text-envelope',
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
    } else {
        commentIcon.style.opacity = '0.5';
        commentIcon.style.transform = 'scaleX(-1)';
    }

    const commentIconText = document.querySelector('.footer-text-comment');
    if (commentIconText.innerHTML === '') {
        commentIconText.innerHTML = '1';
    } else {
        commentIconText.innerHTML = parseInt(commentIconText.innerHTML, 10) + 1;
    }
}

function refreshClicked() {
    const commentIconText = document.querySelector('.footer-text-refresh');
    if (commentIconText.innerHTML === '') {
        commentIconText.innerHTML = '1';
    } else {
        commentIconText.innerHTML = parseInt(commentIconText.innerHTML, 10) + 1;
    }
}

function heartClicked() {
    const commentIconText = document.querySelector('.footer-text-heart');
    if (commentIconText.innerHTML === '') {
        commentIconText.innerHTML = '1';
    } else {
        commentIconText.innerHTML = parseInt(commentIconText.innerHTML, 10) + 1;
    }
}

function envelopeClicked() {
    const commentIconText = document.querySelector('.footer-text-envelope');
    if (commentIconText.innerHTML === '') {
        commentIconText.innerHTML = '1';
    } else {
        commentIconText.innerHTML = parseInt(commentIconText.innerHTML, 10) + 1;
    }
}

function Icon (props) {
    const { icon } = props;
    return (
        <div onClick={icon.eventFunction} className='icon-container'>
            <img src={icon.src} className={icon.name} alt={icon.name} />
            <p className={icon.textClass}>{icon.text}</p>
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