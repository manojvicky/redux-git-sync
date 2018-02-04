import constants from "./counter.constant";
import * as CounterActions from "./counter.action";

const initalstate = {
  data: 0
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'INCREMENT':
      return (Object.assign({}, state, {data: action.data}))
       
    case 'DECREMENT':
      return (Object.assign({}, state, {data: action.data}))

    default:
      return state
  }
}

export {initalstate};
