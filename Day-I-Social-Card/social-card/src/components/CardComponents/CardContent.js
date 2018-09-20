import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div>
            <h1 className="heading" /*style={{color: "red", textDecoration: "underline"}}*/ >Get started with React</h1>
            <p>React makes it painless to create interactive UIs. 
                Design simple views for each state in your application.  </p>
            <h4>reactjs.org</h4>
        </div>
    )
}

// const HeadingStyle = () => {
//     return (
//         <style>
//             .heading {
//                 color: red;
//             }
//         </style>
//     )
// }


export default CardContent;
// export default HeadingStyle;