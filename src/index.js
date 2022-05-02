import React from 'react';
import ReactDOM from 'react-dom';
import App from "./layouts/index";
import {HashRouter, Route} from "react-router-dom";
import {Provider} from "react-redux"
import './style/public.less';
import './style/index.less';
import store from "@/store";


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route component={App}/>
    </HashRouter>
  </Provider>
  , document.getElementById('root')
);