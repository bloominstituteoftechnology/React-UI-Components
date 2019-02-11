import React from "react";
import ReactDOM from "react-dom"

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            countHeart : 0,
            comment : []
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

    render(){
    return (
        <div style={{display:"flex",width:"50%",justifyContent:"space-between",marginLeft:"10%",marginTop:"4%"}}>
            <div ><i class="comment outline icon"></i></div>
            <div><i class="sync alternate icon"></i>0</div>
            <div onClick={this.addHandlerHeart}>{this.state.countHeart}<i class="heart outline icon"></i></div>
            <div onClick={this.addHandler}>{this.state.count}<i class="envelope outline icon"></i></div>    
        </div>
    )
    }
}

export default Footer;