import React, { Component } from 'react';
import './Footer.css';


class FooterContainer extends Component {

    state = {
        plusCounter: 0,
        plusLike: 0
    }

    handleIncrementRepost = () => {
        this.setState({plusCounter: this.state.plusCounter + 1}); 
        
    }

    handleIncrementLike = () => {
        this.setState({plusLike: this.state.plusLike + 1}); 
    }

    render() {
        return (
            <div className="footer-container">
              <div className="footer-flex">
                  <i className="flex-item far fa-comment"></i>
                  <i onClick={this.handleIncrementRepost}  className="flex-item fas fa-sync"><span>{this.state.plusCounter}</span></i>
                  <i onClick={this.handleIncrementLike}  className="flex-item far fa-heart"><span>{this.state.plusLike}</span></i>
                  <i className="flex-item far fa-envelope"></i>  
              </div>  
            </div>
          );
    }

  }


  
  export default FooterContainer;