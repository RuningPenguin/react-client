import React, {useEffect} from "react";
import {NavBar} from "antd-mobile";
import {withRouter} from "react-router-dom";
import routerList from "@/router";
import {connect} from "react-redux";
import {actionUpdateNAV_TITLE} from "@/store/action/glob";


const Header = (props) => {
  const {title, dispatch, history, location: {pathname}} = props;

  const renderNavTitle = () => {
    routerList.forEach(val => {
      if (pathname === val.path) {
        dispatch(actionUpdateNAV_TITLE(val.title));
      }
    });

  };

  useEffect(() => {
    renderNavTitle();
  }, [pathname, dispatch]);


  return (
    <NavBar
      onBack={() => {
        history.goBack();
      }}
    >{title}</NavBar>
  );
};

export default connect(state => ({title: state.glob.NAV_TITLE}))(withRouter(Header));