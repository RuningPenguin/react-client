let initState = {};

const userInfo = (state = initState, {type, payload}) => {
  switch (type) {
    case 'getUserInfo':
      return state;
    default:
      return state;
  }
}
export default userInfo