import React from 'react'
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Auth from "@/components/q-auth/auth";
import NoPage from "@/views/noPage";
import routerList from "@/router"

const Content = () => {

  const renderRouter = () => {
    return routerList.map((val, idx) => {
      if (val.auth) {
        return (
          <Auth key={idx} exact path={val.path} component={val.component}/>)
      } else {
        return (
          <Route key={idx} exact path={val.path} component={val.component}/>)
      }
    })

  }


  return (
    <Switch>
      {renderRouter()}
      <Redirect exact from='/' to='/home'/>
      <Route component={NoPage}/>
    </Switch>
  )
}

export default withRouter(Content)