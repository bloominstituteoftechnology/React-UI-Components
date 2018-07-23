import React from 'react'; 
import ReactDom from 'react-dom'; 
import './Footer.css';




const Footer = () => {
    return (
    <div className="footer">
        <i onClick ={handleCommentClick}className="far fa-comment"></i>
        <i className="fas fa-sync"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-envelope"></i>
    </div>
    );
}

function handleCommentClick () {
    prompt('enter your comment');
}

export default Footer; 



