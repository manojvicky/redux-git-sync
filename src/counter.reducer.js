export const initalstate = 0;
const counters = (state = initalstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (Object.assign({}, state, action.data))
       
    case 'DECREMENT':
      return (Object.assign({}, state, action.data))

    default:
      return state
  }
}

export default counters