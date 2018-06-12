import React from 'react';
import './Display.css';

let screen = '0';
let allowed = true;

    const screenChange = (e) => {
      if(screen === '0') screen = e.target.innerHTML;
      else screen += e.target.innerHTML;
      console.log(e.target.innerHTML);
      console.log(screen);
      allowed = true;
      return screen;
    }

    const screenFunc = (e) => {
      if(!allowed) {
        screen = screen.slice(0, [screen.length - 3]);
        console.log(screen);
        allowed = true;
      }
      if(allowed) screen +=' ' + e.target.innerHTML + ' ';
      else screen[screen.length-2] = e.target.innerHTML;
      allowed = false;
      console.log(screen);
      return screen;
    }

    const screenReset = () => {
      screen = '0';
      console.log(screen);
    }

    const equal= () => {
      if(!allowed) {
        screen = screen.slice(0, [screen.length - 3]);
        console.log(screen);
        allowed = true;
      }
      if(allowed) {
        console.log(screen);
        screenReset();
      }
    }

    const Clear = () => {
      return <div onClick={screenReset} className='clear'>clear</div>;
    }

    const Num = props => {
      return <div onClick={screenChange} className={props.className}>{props.text}</div>;
    };

    const Act = props => {
      return <div onClick={screenFunc} className={props.className}>{props.text}</div>;
    }
    
    const ActE = props => {
      return <div onClick={equal} className={props.className}>{props.text}</div>;
    }

    const Screen = props => {
      return(
        <div className='block'> 
          <p className='screen'>
            {props.text}
          </p>
        </div>
      );  
    };

export default Screen;