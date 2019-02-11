import React from "react";
import ReactDOM from "react-dom"

class Footer extends React.Component{
    constructor(){
        super()
        this.addHandler = this.addHandler.bind(this)
        this.addHandlerHeart = this.addHandlerHeart.bind(this)
        this.changeColorHandler = this.changeColorHandler.bind(this)
        this.state = {
            count : 0,
            countHeart : 0,
            color : ""
        }
    }

    addHandler =()=>{
        this.setState ((prevState)=>{
            return {
                count : prevState.count +1
            }
        })
    }

    addHandlerHeart =()=>{
        this.setState ((prevS)=>{
            return {
                countHeart :prevS.countHeart+1
            }
        })
    }


    changeColorHandler=()=>{
      this.setState({
          color : "red"
      })
    }


    render(){
    return (
        <div style={{display:"flex",width:"50%",justifyContent:"space-between",marginLeft:"10%",marginTop:"4%"}}>
            <div><i class="comment outline icon"></i></div>
            <div onMouseLeave={this.changeColorHandler} style={{color:this.state.color}}><i class="sync alternate icon"></i>0</div>
            <div onClick={this.addHandlerHeart}>{this.state.countHeart}<i class="heart outline icon"></i></div>
            <div onClick={this.addHandler}>{this.state.count}<i class="envelope outline icon"></i></div>    
        </div>
    )
    }
}

export default Footer;