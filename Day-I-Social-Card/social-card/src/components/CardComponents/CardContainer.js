import React from 'react';
import './Card.css';

import Banner from './CardBanner';
import Content from './CardContent';

const CardContainer = () =>{
    return(
        <div className="card-container" onClick={() => window.open("https://reactjs.org/")}>
            <Banner />
            <Content />
        </div>
    )
};

export default CardContainer;

// This way does not work in react:
// Instead use onClick: onClick must take in
// a function to avoid running when the page is redered

// class PageLink{
//     constructor(el){
//         this.el = el;
//         this.el.addEventListener("click", () =>{
//             this.redirect();
//         });
//     }
//     redirect(){
//         window.open("www.reactjs.org");
//     }
// }

// let linkArea = document.querySelector(".card-container");
// console.log(linkArea);
// linkArea = new PageLink(linkArea);
// console.log(linkArea);