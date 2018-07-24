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
        this.state = {sync: "", like:"", comment:"", message:""}
        this.handleSyncClick = this.handleSyncClick.bind(this); 
        this.handleLickClick = this.handleLikeClick.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
        this.handleMessageClick = this.handleMessageClick.bind(this); 
    }

    handleSyncClick() {
        if(Number.isInteger(this.state.sync)){
            this.state.sync +=1; 
        } else {
            this.state.sync = 1; 
        }
        // this.forceUpdate();
        this.setState(this.state); //not sure if this.setState is better than forceUpdate or not. 
         
    }

    handleLikeClick(){
        if(Number.isInteger(this.state.like)){
            this.state.like ++; 
        }else {
            this.state.like = 1;
        }
        // this.forceUpdate();
        this.setState(this.state); //not sure if this.setState is better than forceUpdate or not. 
        
    }

    handleCommentClick(){
        let answer = prompt("enter comment");
        answer;
        if(answer.length > 5){
            if(Number.isInteger(this.state.comment)){
                this.state.comment ++;
            } else {
                this.state.comment = 1; 
            }
            //this.forceUpdate(); 
            this.setState(this.state); //not sure if this.setState is better than forceUpdate or not. 
        }   
    }

    handleMessageClick() {
        if(Number.isInteger(this.state.message)){
            this.state.message ++;
        } else {
            this.state.message = 1; 
        }
        alert("Message sent");
        //this.forceUpdate(); 
        this.setState(this.state); //not sure if this.setState is better than forceUpdate or not. 
    }

    render(){
        return (
            <div className="footer">
                <i onClick = {this.handleCommentClick} className="far fa-comment">  {this.state.comment}</i>
                <i onClick={this.handleSyncClick} className="fas fa-sync">  {this.state.sync}</i>
                <i onClick={this.handleLickClick}className="far fa-heart">  {this.state.like}</i>
                <i onClick={this.handleMessageClick}className="far fa-envelope">  {this.state.message}</i>
            </div>
            );
    }
}


export default Footer; 



