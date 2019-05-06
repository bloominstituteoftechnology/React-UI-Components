import React from 'react';
import "./Preview.css";
import ReactLogo from "./reactLogo.png"
import Icons from './Icons.png';

const Preview = (props) => {
    return (
        <>
        <div className="preview-container">
            <img src={ReactLogo} id ="react-logo" alt="react-logo"/>
            <div className="slug-line">
                <h4>{props.getstarted}</h4>
                <p>{props.previewstatus}</p>
                <p id="website">{props.website}</p>
            </div>
        </div>
        <img id="icons-container" src={Icons} alt="icons"/>
        </>
    );
};

export default Preview;