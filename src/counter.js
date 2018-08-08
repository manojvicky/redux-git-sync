import React from 'react';
import otherFunction from './otherFunction';

class Counter extends React.Component {
    constructor(){
        super();
        this.state={
            kiki:""
        }
        this.increment = this.increment.bind(this);
        this.hello = this.decrement.bind(this);
        this.newFunction = otherFunction.bind(this);
    }
    increment(){
        this.props.actions.increment(this.props.data+1);
        this.newFunction("hello", "manoj ji");
    }
    decrement(str){
        console.log("decrement", str); 
        return str;
    }

    // handleClick = () => {
    //     console.log("arrow function");
    // }

    // arrowFunction = () => {
    //     console.log("arrow function");
    // };
   render() {
       console.log("this", this);
       
      return (
         <div>
             <div>
            <button onClick={ this.increment } >Increase</button>
            <button onClick={ this.hello }>Decrease</button>
            </div>
            <p>{this.props.data}</p>
         </div>
      );
   }
}
export default Counter;