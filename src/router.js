import Home from "@/views/home/page/home";
import My from "@/views/my/page/my";
import Goods from "@/views/home/page/goods";
import Detail from "@/views/home/page/detail";
import Login from "@/views/my/page/login";

const routerList = [
  {
    path: '/home',
    title: '首页',
    auth: false,
    showNav:false,
    showFooter:true,
    component: Home,
  },
  {
    path: '/my',
    title: '我的',
    auth: true,
    showNav:false,
    showFooter:true,
    component: My,
  },
  {
    path: '/goods',
    title: '商品',
    auth: false,
    showNav:true,
    showFooter:false,
    component: Goods,
  },
  {
    path: '/goods/detail',
    title: '商品详情',
    auth: false,
    showNav:true,
    showFooter:false,
    component: Detail,
  },
  {
    path: '/login',
    title: '登录',
    auth: false,
    showNav:true,
    showFooter:false,
    component: Login,
  }
]

export default routerList