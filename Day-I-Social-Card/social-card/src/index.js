import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render((
    <App
        postDate="26 Jan"
        postUrl="reactjs.org"
        profileUrl="http://example.com/@lambdaschool"
        profileName="Lambda School"
        profileId="@LambdaSchool"
        cardBody="React makes it painless to create interactive UIs. Design simple views for each state in your application."
        headerBody="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
    />
), document.getElementById('root'));
