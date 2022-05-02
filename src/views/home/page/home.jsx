import React from "react";
import {Button} from "antd-mobile";
import {withRouter} from "react-router-dom";
import {asyncAddCount} from "@/store/action/count";
import {connect} from "react-redux";

const Home = (props) => {
  const {list,count, history,dispatch} = props;


  return (
    <div>
      <h1>Home</h1>
      {list.map((item, index) => {
        return (<h5 key={index}>{item}</h5>)
      })}

      <Button onClick={() => {
        history.push({pathname: '/goods'})
      }}>good1</Button>

      <Button
        onClick={() => {
          dispatch(asyncAddCount(1))
        }}>+</Button>
      <h1>{count}</h1>
    </div>
  );
}

export default connect(store => ({list: store.list,count:store.count}))(withRouter(Home))