import React from 'react'; 
import ReactDom from 'react-dom'; 
import './Footer.css';


 

const Footer = () => { 
    let comment = 0;
    let sync = 0;
    function handleCommentClick (comment) {
        let answer = prompt('enter your comment');
        if (answer){
            return comment++;
        }
    }
    
    function handleSyncClick(sync) {
        return sync+=1
    }
    return (
    <div className="footer">
        <i onClick ={prompt('enter comment')}className="far fa-comment">{comment}</i>
        <i onClick={() => sync++} className="fas fa-sync">{sync}</i>
        <i className="far fa-heart"></i>
        <i className="far fa-envelope"></i>
    </div>
    );
}



export default Footer; 



