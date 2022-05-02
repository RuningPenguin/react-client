import React from "react";
import {Redirect, Route, withRouter} from "react-router-dom";
import {getToken} from "@/tools";

const Auth = (props) => {
  const {path, component, exact = false, strict = false} = props
  const isAuth = getToken();

  if (isAuth) {
    return (
      <Route exact={exact} strict={strict} path={path} component={component}/>)
  } else {
    return (<Redirect exact to='/login'/>)
  }
}

export default withRouter(Auth)