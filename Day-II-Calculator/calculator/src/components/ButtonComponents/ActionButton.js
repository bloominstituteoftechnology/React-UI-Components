import React from 'react';
import './Button.css';

const MyButton = props => {
    return (
        // `${console.log('props: ', props)}`
        <button className={`displayFlex ${props.customStyle}`}>{props.text}</button>
    )


} 

const ActionButton = () => {
    return (
        <div className='displayFlex'>
            <div className='fullWidth'>
                <MyButton customStyle='blackBack' text='0' />
            </div>
            <div>
                <MyButton customStyle='longB' text='clear' />
                <MyButton customStyle='redBack' text='/' />
            </div>    
        </div>
    )
}
 
export default ActionButton;