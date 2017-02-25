import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  ({
      counter : 0,
      targetValue: 0
    })
    this.add = this.add.bind(this)
    this.dec = this.dec.bind(this)
    this.target = this.target.bind(this)

  }

  add(){
     this.setState({
       counter: this.state.counter + this.state.targetValue
     })
     console.log(this.state.counter)
  }
  
  
   dec(){
     this.setState({
       counter: this.state.counter - this.state.targetValue
        })
     console.log(this.state.counter)
  }
  target(e){
    e.preventDefault()
     let demoValue = parseInt(this.refs.demo.value) 
    this.setState({
      targetValue: demoValue
    })
  }
  
  render() {
    return (
      <div className="App">
         <form onSubmit={this.target}>
           <input type='text' ref='demo' />
           <button >Target</button>
        </form>
        <h1>Counter: {this.state.counter}</h1>
        <button  onClick={this.add} type='button'>Add +</button>
        <button  onClick={this.dec} type='button'>Dec -</button>
      </div>
    );
  }
}

export default App;
