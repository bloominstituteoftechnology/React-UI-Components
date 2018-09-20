import React from 'react';
import "./Footer.css";




class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count:0
        }
    }
    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }
    increment(e) {
        this.setState({
            count: this.state.count + 1
        });
    }
    render () {
        return (
              <div className="chat-bubble">
                {" "}
                <i className="far fa-comment"/>
                    {" "}
                    <div className= "sync" onClick={this.onClick.bind(this)}>
                        <i class="fas fa-sync" /><p>{this.state.count}</p></div>
            
                    {" "}
                    <div className="heart" onClick={this.increment.bind(this)}>
                        <i class="fas fa-heart" /><p>{this.state.count}</p></div>
                    {" "}
                    <i class="far fa-envelope"/>
              </div>
            );
    } 
}




// const Footer = () => {

// return (
//   <div className="chat-bubble">
//     {" "}
//     <i className="far fa-comment"/>
//         {" "}
//         <div className= "sync" onClick={()=>{alert('clicked')}}>
//             <i class="fas fa-sync" /><p>6</p></div>

//         {" "}
//         <div className="heart">
//             <i class="fas fa-heart" /><p>4</p></div>
//         {" "}
//         <i class="far fa-envelope"/>
//   </div>
// );
// };

export default Footer;