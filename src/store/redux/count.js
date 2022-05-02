let initState = 0;

const count = (state = initState, {type, payload}) => {
  switch (type) {
    case 'addCount':
      console.log(state,'addCount')
      let temp = state;
      temp+=payload
      return temp;
    default:
      return state
  }
}

export default count