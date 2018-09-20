import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return(
        <div>
        <section className="headerText">
                <span>Lambda School</span>
            <span className="atName">@LambdaSchool</span>
            <span>19 Jan</span> 
        </section>
        
            <div className="headerPara" >
        Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!

        </div>
        </div>
       
    )
}

export default HeaderTitle ;