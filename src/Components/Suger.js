import React,{Component} from "react";

class Box extends Component {
    render(){
        return(
            <div className='box'>
            <p>
            Date : {this.props.dateVal}
            </p> 
            <p>
              Number Result : {this.props.diabetesRecord}
            </p> 
          </div>
        )
    }
}
export default Box;