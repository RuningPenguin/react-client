import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import user from "@/store/redux/user";
import count from "@/store/redux/count";
import list from "@/store/redux/list";
import glob from "@/store/redux/glob";


// 配置持久化插件（blacklist和whitelist二选一，不要同时配置；都不配置，默认所有数据都持久化）
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['list'], // 黑名单
  whitelist: [] // 白名单
}

// 合并reducer
const rootReducer = combineReducers({user, count, list,glob})
// 持久化处理
const persistedReducer = persistReducer(persistConfig, rootReducer)

//使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux 增强到浏览器
persistStore(store);


export default store