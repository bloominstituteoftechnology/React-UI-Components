import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return (
        <footer className="card-footer">
            <a><i class="far fa-comment fa-fw fa-flip-horizontal"></i></a>
            <a><i class="fas fa-fw fa-sync"></i> 6</a>
            <a><i class="far fa-fw fa-heart"></i> 4</a>
            <a><i class="far fa-fw fa-envelope"></i></a>
        </footer>
    )
};

export default FooterContainer;