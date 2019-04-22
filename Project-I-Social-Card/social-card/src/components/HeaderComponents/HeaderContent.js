import React from 'react';
import './Header.css';

export default function HeaderContent(props) {
    return (
        <div>
            <img 
                src={props.img.src || "../../../../public/favicon.ico"}
                alt={props.img.alt || "React Icon"}
             />
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            {
                (props.link) 
                    ? <a href="https://reactjs.org/">reactjs.org</a>
                    : null
            }
        </div>
    )
}