import { Component } from "react"
import React from "react"

class Contact extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    
    handleIncrease = () =>{
        this.setState({
            count: this.state.count + 1
        })
      }

    render() {
      return (
        <>
         <div className="App">
         <header className="App-header">
           <div>Hello, World! </div>
           <p>Your count is {this.state.count}</p>

           <button
           onClick={() => alert("yooooooooo")}
           >
            Count</button>
           </header>
           </div>
        </>
   

      );
    }
  }
  
  export default Contact;