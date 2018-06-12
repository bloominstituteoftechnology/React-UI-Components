import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const MyButton = props => {
    return (
        // `${console.log('props: ', props)}`
        <button className={`boxes ${props.customStyle}`}>{props.text}</button>
    )


}

const NumberButton = () => {
    return (
        <div>
                <ActionButton />   
            <div>
                <MyButton customStyle='whiteBack' text='7' />
                <MyButton customStyle='whiteBack' text='8' />
                <MyButton customStyle='whiteBack' text='9' />
                <MyButton customStyle='redBack' text='X' />
            </div>
            <MyButton customStyle='whiteBack' text='4' />
            <MyButton customStyle='whiteBack' text='5' />
            <MyButton customStyle='whiteBack' text='6' />
            <MyButton customStyle='redBack' text='-' />
            <div>
                <MyButton customStyle='whiteBack' text='1' />
                <MyButton customStyle='whiteBack' text='2' />
                <MyButton customStyle='whiteBack' text='3' />
                <MyButton customStyle='whiteBack' text='+' />
            </div>
            <div>
                <MyButton customStyle='longB' text='0' />
                <MyButton customStyle='whiteBack' text='=' />
            </div>

        </div>
    )
}

export default NumberButton;