

const addCount = (payload) => {
  return {
    type: 'addCount',
    payload,
  }
}

export const asyncAddCount = payload => dispatch => dispatch(addCount(payload))