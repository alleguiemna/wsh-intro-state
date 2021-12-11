import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  console.log("constructor",constructor)
    this.state = {
      count:0,
      memoryId:null
    }
  }
  componentDidMount(){
    this.setState({memoryId : setInterval(() => {
      this.increment()
    }, 1000) });
    //  let memory= setInterval(() => {
    //   this.increment()
    // }, 1000);
   
    // console.log(memory)
    console.log("componentDidMount()")
  }
  increment = () =>{
    this.setState({count : this.state.count + 1 });
  }
  decrement = () =>{
    if(this.state.count > 0)
    {
      this.setState({count : this.state.count - 1 });
    }
    else{
      alert("You cannot increment")
    }
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    clearInterval(this.state.memoryId)
    console.log("componentWillUnmount()")
  }
  render() {
  console.log("render()")
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter

