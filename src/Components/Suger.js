import React, { Component } from 'react';

class TestResult extends Component {
    constructor(){
        super()
        this.state = {
            TestResult : `140`
        }
    }
    textResult = (event) =>{
        this.setState = {
            TestResult : event.target.value
        }
    }
    render(){
        return (
        <div> 
            <input className='resultBox' value={this.state.TestResult} onInput={this.textResult}/>
        </div>
        )
    }
}

export default TestResult;