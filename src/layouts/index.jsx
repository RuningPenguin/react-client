import React, {useCallback, useEffect} from "react";
import Header from "@/layouts/header";
import Content from "@/layouts/content";
import style from "./index.module.less";
import {withRouter} from "react-router-dom";
import Footer from "@/layouts/footer";
import {connect} from "react-redux";
import {
  actionUpdateSHOW_FOOTER,
  actionUpdateSHOW_NAV
} from "@/store/action/glob";
import routerList from "@/router";
import "./update-default-style.less";

const App = (props) => {
  const {location: {pathname}, SHOW_NAV, SHOW_FOOTER, dispatch} = props;


  const renderDefaultComponents = useCallback(() => {
    routerList.forEach(val => {
      if (val.path === pathname) {
        dispatch(actionUpdateSHOW_NAV(val.showNav));
        dispatch(actionUpdateSHOW_FOOTER(val.showFooter));
      }
    });
  }, [pathname, dispatch]);

  useEffect(() => {
    renderDefaultComponents();
  }, [pathname, renderDefaultComponents]);

  return (
    <div className={style.wrap}>

      {
        SHOW_NAV &&
        (<div className={style.header}>
          <Header/>
        </div>)
      }

      <div className={style.content}>
        <Content/>
      </div>

      {
        SHOW_FOOTER &&
        <div className={style.header}>
          <Footer/>
        </div>
      }

    </div>
  );
};


export default connect(state => state.glob)(withRouter(App));