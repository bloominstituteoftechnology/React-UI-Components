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
        this.state = {sync: 0, like:0, comment:0}
        this.handleSyncClick = this.handleSyncClick.bind(this); 
        this.handleLickClick = this.handleLikeClick.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
    }

    handleSyncClick() {
        this.state.sync +=1; 
        this.forceUpdate(); 
    }

    handleLikeClick(){
        this.state.like ++;
        this.forceUpdate();

    }

    handleCommentClick(){
        let answer = prompt("enter comment");
        answer;
        if(answer.length > 5){
            this.state.comment ++;
            this.forceUpdate(); 
        }
        
    }

    render(){
        return (
            <div className="footer">
                <i onClick = {this.handleCommentClick} className="far fa-comment">  {this.state.comment}</i>
                <i onClick={this.handleSyncClick} className="fas fa-sync">  {this.state.sync}</i>
                <i onClick={this.handleLickClick}className="far fa-heart">  {this.state.like}</i>
                <i className="far fa-envelope"></i>
            </div>
            );
    }

}


export default Footer; 



