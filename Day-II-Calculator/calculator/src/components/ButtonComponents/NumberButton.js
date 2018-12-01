import React from 'react';
import './Button.css';

const ClearButton = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button1 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button2 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button3 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button4 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button5 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button6 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button7 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button8 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button9 = props => <button className={`btn ${props.width}`}>{props.text}</button>
const Button0 = props => <button className={`btn ${props.width}`}>{props.text}</button>

const NumberComponent = props => {
    return (
        <div className="three-quarter">
            <ClearButton width="full" text="Clear"/>
            
            <Button1 width="three" text="1"/>
            <Button2 width="three" text="2"/>
            <Button3 width="three" text="3"/>
            <Button4 width="three" text="4"/>
            <Button5 width="three" text="5"/>
            <Button6 width="three" text="6"/>
            <Button7 width="three" text="7"/>
            <Button8 width="three" text="8"/>
            <Button9 width="three" text="9"/>
            <Button0 width="full" text="0"/>

        </div>
    )
}
export default NumberComponent;
