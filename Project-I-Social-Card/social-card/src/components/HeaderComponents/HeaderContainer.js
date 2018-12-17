import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'


function HeaderContainer(props){
    return(
        <div className="header-container">
            <img src="https://yt3.ggpht.com/a-/AN66SAw9C1HPxBru_POv5bcGj8yLp8OSc18VosnELA=s288-mo-c-c0xffffffff-rj-k-no" />
            <div>
            <HeaderTitle userName="Lambda School" userHandle="@LambdaSchool" />
            <HeaderContent text="Let's Learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React" />
            </div>
        </div>
    )
}

export default HeaderContainer;