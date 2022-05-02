import React from "react";
import {withRouter} from "react-router-dom";
import {Button} from "antd-mobile";
import {asyncAddList} from "@/store/action/list";
import {connect} from "react-redux";


const My = (props) => {
  const {list, dispatch} = props

  return (
    <div>
      <h1>My</h1>
      <Button onClick={() => {
        dispatch(asyncAddList('新增数据'))
      }}>++</Button>
      {list.map((val, idx) => {
        return (<h3 key={idx}>{val}</h3>)
      })}
    </div>
  );
}

export default connect(store => ({list: store.list}))(withRouter(My))