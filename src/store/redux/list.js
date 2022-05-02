let initState = [1, 2, 3];

const count = (state = initState, {type, payload}) => {
  switch (type) {
    case 'addList':
      let tempArr = [...state];
      tempArr.push(payload)
      console.log(state,'addList')
      return tempArr;
    default:
      return state
  }
}

export default count