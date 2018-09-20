import React from 'react';
import "./Footer.css";




class Footer extends React.Component {
    constructor (props) {
        super(props);

        // Can use two counter to count independently of eachother
        this.state = {
            count:0,
            count2:0
        }

    }
    // We are incrementing each time somone clicks a the re-sync icon
     increment = () => {
      this.setState({
          count2: this.state.count2 + 1
      })
    }
    // We are incrementing each time somone clicks a heart icon
     countUp = () => {
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
                    <div className= "sync" onClick={this.countUp}>
                        <i class="fas fa-sync" /><p>{this.state.count}</p></div>
            
                    {" "}
                    <div className="heart" onClick={this.increment}>
                        <i class="fas fa-heart" /><p>{this.state.count2}</p></div>
                    {" "}
                    <i class="far fa-envelope"/>
              </div>
            );
    } 
}



// Testing the look of the items here
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