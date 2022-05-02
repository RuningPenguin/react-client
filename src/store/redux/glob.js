let initState = {
  NAV_TITLE: '',
  SHOW_NAV: false,
  SHOW_FOOTER: false,
};

const glob = (state = initState, {type, payload}) => {
  switch (type) {
    case 'updateNAV_TITLE':
      return {...state, NAV_TITLE: payload};
    case 'updateSHOW_NAV':
      return {...state, SHOW_NAV: payload};
    case 'updateSHOW_FOOTER':
      return {...state, SHOW_FOOTER: payload};
    default:
      return state;
  }
}
export default glob