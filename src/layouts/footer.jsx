import React from 'react'
import {TabBar} from 'antd-mobile'
import {useHistory, useLocation, withRouter} from "react-router-dom";

const Footer = () => {
  const history = useHistory()
  const location = useLocation()
  const {pathname} = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon:<img style={{width:'20px',height:'20px'}} alt="" src='http://ewhj5.oss-cn-hangzhou.aliyuncs.com/mini-program/e-live/icon/a-detail-index-icon.png'/>
    },
    {
      key: '/my',
      title: '我的',
      icon:<img style={{width:'20px',height:'20px'}}  alt="" src='http://ewhj5.oss-cn-hangzhou.aliyuncs.com/mini-program/e-live/icon/enterOrder-user-user_icon.png'/>
    },
  ]

  return (
    <TabBar safeArea activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item  key={item.key} title={item.title} icon={item.icon}/>
      ))}
    </TabBar>
  )
}

export default withRouter(Footer)


