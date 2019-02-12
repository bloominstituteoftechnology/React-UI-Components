import React from 'react';
import './Header.css';

const HeaderTitle = ()=>{
    return (
        <div>
                <h5>Lambda School <span></span><span style={{color:"gray",fontSize:"0.7rem"}}>
                @LambdaSchool {new Date ().toUTCString()}</span></h5>
                <p style={{fontSize:"0.8rem"}}>Let's learn react by building simple interfaces with components.Don't try to overthink it
                just keep it simple and have fun, once you feel comfortable using components, you are well on 
                your way to mastering react</p>
        </div>
    )
}

export default HeaderTitle;