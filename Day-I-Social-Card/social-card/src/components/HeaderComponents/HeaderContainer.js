import React from 'react';
import './Header.css';


const heading = () => {
    return(
        <div class="container-header">
        <div className="title">
        <p>Lambda School</p>
        <p className="faded">@LambdaSchool</p>
        <p className="faded">July 23, 2018</p>
        </div>
        <div className="content-header">
        <p>
            Lets learn React by building simpleInterfaces with components. Dont try to
            overthink it. Just keep it simple and have fun. Once you feel comfortable using
            components you are well on you way to mastering React!
        </p>
        </div>
        </div>

    )
}
export default heading;