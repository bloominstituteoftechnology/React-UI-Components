import React from 'react'
import "./Footer.css"
function Footer(){
    let comment = 0;
    let synBtn = 0;
    let heart = 0;


    function addComment(e) {
        e.preventDefault();
        comment++
        e.target.innerHTML = `<span>${comment}</span>`
    }
    function addSync(e) {
        e.preventDefault();
        synBtn++
        e.target.innerHTML = `<span>${synBtn}</span>`
    }
    function addHeart(e) {
        e.preventDefault();
        let heartIcon = document.querySelector('.fa-heart');
        heartIcon.style.color = 'red';
        heart++
        e.target.innerHTML = `<span>${heart}</span>`
    }

    return (
        <footer>
            <div className="icon">
            <i onClick={addComment} className="far fa-comment"><span>&nbsp;&nbsp;</span></i>
            </div>
            <div className="icon">
            <i onClick={addSync} className="fas fa-sync"><span>&nbsp;&nbsp;</span></i>
            </div>
            <div className="icon">
            <i onClick={addHeart} className="far fa-heart"><span>&nbsp;&nbsp;</span></i>
            </div>
            <div className="icon">
            <i className="far fa-envelope"></i>
            </div>
        </footer>
    )
}

export default Footer