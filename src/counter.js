import React from 'react';

class Counter extends React.Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        
    }
    increment(){this.props.data+1;
console.log("increment");    
};
    decrement(){this.props.data-1;
console.log("decrement");     
};
   render() {
      return (
         <div>
             <div>
            <button onClick={ this.increment } >+</button>
            <button onClick={ this.decrement }>-</button>
            </div>
            <p>{this.props.data}</p>
         </div>
      );
   }
}
export default Counter;