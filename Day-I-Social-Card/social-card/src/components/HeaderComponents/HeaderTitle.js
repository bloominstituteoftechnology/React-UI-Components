import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    console.log(`Title: ${props.headDivClass}`);
    return (
        <div className = {props.headDivClass}>
            <div className = {props.headClass}>{props.headerText}</div>
            <div className = {props.handleClass}>{props.handleText}</div>
            <div className = {props.handleClass}>{props.dateText}</div>
        </div>
    );
}

export default HeaderTitle;