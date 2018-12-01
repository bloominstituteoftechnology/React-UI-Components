import React from 'react';
import './Button.css';

// import TotalComponent from '../DisplayComponents/TotalComponent';

// console.log(TotalComponent.total);


const DivideButton = props => <button className="btn">{props.text}</button>
const MultiplyButton = props => <button className="btn">{props.text}</button>
const SubstractButton = props => <button className="btn">{props.text}</button>
const AddButton = props => <button className="btn">{props.text}</button>
const ResultButton = props => <button className="btn">{props.text}</button>


const ActionComponent = props => {
    return (
        <div className="one-quarter">
            <DivideButton text="/"/>
            <MultiplyButton text="X"/>
            <SubstractButton text="-"/>
            <AddButton text="+"/>
            <ResultButton text="="/>
        </div>
    )
}


export default ActionComponent;