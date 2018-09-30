import React from 'react';
import './Button.css';
import Button from './Button';


const NumbersContainer = () => {
    return (
       <div className="NumbersContainer">
      {/*  <NumberButton buttonStyle={'number'} text={'7'} />
       <NumberButton buttonStyle={'number'} text={'8'} />
       <NumberButton buttonStyle={'number'} text={'9'} />
       <NumberButton buttonStyle={'number'} text={'4'} />
       <NumberButton buttonStyle={'number'} text={'5'} />
       <NumberButton buttonStyle={'number'} text={'6'} />
       <NumberButton buttonStyle={'number'} text={'1'} />
       <NumberButton buttonStyle={'number'} text={'2'} />
       <NumberButton buttonStyle={'number'} text={'3'} /> */}
       <Button label={'7'} handleClick={this.handleClick} type='input' />
        <Button label={'8'} handleClick={this.handleClick} type='input' />
        <Button label={'9'} handleClick={this.handleClick} type='input' />
        <Button label={'4'} handleClick={this.handleClick} type='input' />
        <Button label={'5'} handleClick={this.handleClick} type='input' />
        <Button label={'6'} handleClick={this.handleClick} type='input' />
        <Button label={'1'} handleClick={this.handleClick} type='input' />
        <Button label={'2'} handleClick={this.handleClick} type='input' />
        <Button label={'3'} handleClick={this.handleClick} type='input' />
    
    
    
    
    
    
     </div>
    
    )


}






export default NumbersContainer;