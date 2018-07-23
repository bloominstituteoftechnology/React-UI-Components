import React from 'react'; 
import ReactDom from 'react-dom'; 
import './Footer.css';


 

// const Footer = () => { 
//     let comment = 0;
//     let sync = 0;
//     return (
//     <div className="footer">
//         <i onClick ={prompt('enter comment')}className="far fa-comment">{comment}</i>
//         <i onClick={() => sync++} className="fas fa-sync">{sync}</i>
//         <i className="far fa-heart"></i>
//         <i className="far fa-envelope"></i>
//     </div>
//     );
// }


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {sync: 0}
        this.handleSyncClick = this.handleSyncClick.bind(this); 
    }
    handleSyncClick() {
        let syncCount = this.state.sync +1;
        console.log(syncCount);  
        this.setState({sync : syncCount});  
    }
    render(){
        return (
            <div className="footer">
                <i className="far fa-comment">{this.state.comment}</i>
                <i onClick={this.handleSyncClick} className="fas fa-sync">{this.state.sync}</i>
                <i className="far fa-heart"></i>
                <i className="far fa-envelope"></i>
            </div>
            );
    }

}


export default Footer; 



