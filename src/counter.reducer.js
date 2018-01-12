import constants from "./counter.constant";

const initalstate = {
  data: 0
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'INCREMENT':
      return (Object.assign({}, state, action.data))
       
    case 'DECREMENT':
      return (Object.assign({}, state, action.data))

    default:
      return state
  }
}

export {initalstate};
