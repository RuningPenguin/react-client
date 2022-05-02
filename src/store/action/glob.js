const updateNAV_TITLE = payload => {
  return {type: 'updateNAV_TITLE', payload}
}
const updateSHOW_NAV = payload => {
  return {type: 'updateSHOW_NAV', payload}
}
const updateSHOW_FOOTER = payload => {
  return {type: 'updateSHOW_FOOTER', payload}
}

export const actionUpdateNAV_TITLE = payload => dispatch => dispatch(updateNAV_TITLE(payload))
export const actionUpdateSHOW_NAV = payload => dispatch => dispatch(updateSHOW_NAV(payload))
export const actionUpdateSHOW_FOOTER = payload => dispatch => dispatch(updateSHOW_FOOTER(payload))