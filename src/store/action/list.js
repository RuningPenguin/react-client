const addList = payload => {
  return{type:'addList',payload}
}

export const asyncAddList = payload => dispatch =>{
  setTimeout(()=>dispatch(addList(payload)),1000)
}