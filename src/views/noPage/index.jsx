import React from "react";
import {withRouter} from "react-router-dom";
import "./index.less"

const NoPage = () => {
  return (
    <div className='noPage__wrap'>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
};

export default withRouter(NoPage)