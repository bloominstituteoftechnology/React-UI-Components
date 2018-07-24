import React from 'react';
import './Footer.css';



export const Footer = () =>{
return (<div className="FooterContainer"> 
<i id="commentButton" className="far fa-comment"></i>
<i className="fas fa-sync"><span className="resultsText"> 6 </span> </i>
<i className="far fa-heart"><span className="resultsText">4</span></i>
<i className="far fa-envelope"></i>

</div>);
}