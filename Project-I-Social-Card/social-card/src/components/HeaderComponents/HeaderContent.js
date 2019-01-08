import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle"

let moment =require("moment")
let time = moment().format("MMM DD")
console.log(time)
function HeaderContent() {
    return (
    <div className="header-text">
        <HeaderTitle title="Lambda School" handle="@LambdaSchool" date={time}/>
        <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just try to keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
    )
}

export default HeaderContent;

