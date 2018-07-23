import React from 'react';
import './Footer.css';

const Footer = () => {
    const onClickComment = () => alert('No commenting functionality added yet! Oops!');
    const onClickRepost = () => alert('No resposting functionality added yet! Oops!');
    const onClickFav = () => alert('No favorite functionality added yet! Oops!');
    const onClickMail = () => alert('No mailing functionality added yet! Oops!');
    return (
        <footer>
            <div className="footer">
                <span onClick={onClickComment}>
                    <i className="far fa-comment"></i>
                </span>
                <span onClick={onClickRepost}>
                    <i className="fas fa-sync"></i> &nbsp; <span className="stats-num">6</span>
                </span>
                <span onClick={onClickFav}>
                    <i className="far fa-heart"></i> &nbsp; <span className="stats-num">4</span>
                </span>
                <span onClick={onClickMail}>
                    <i className="far fa-envelope"></i>
                </span>
            </div>
            <hr />
        </footer>
    );
};

export default Footer;