import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { success } from "redux-saga-requests";
import {getCookie,setCookie} from '../utils/cookie'
import reducers from "./reducers";
import sagas from "./sagas";
import { APP_REFRESH } from "../modules/app/reducer";

export const APP_INIT = "APP_INIT";


const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware();

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...[sagaMiddleware], middleware, thunk)
);
const skipCookie = [
  '@@redux/INIT',
  '@@router/LOCATION_CHANGE',
  'APP_REFRESH',
];
const initProps = [
  'product'
];

const reducer = combineReducers(reducers);

const rootReducer = (state = {}, action) => {
  let newState;
  const { app, ...rest } = state;
  if (action.type === success(APP_REFRESH)) {
    var cookie = getCookie('amatakStorage');
    if(cookie !== null){
      cookie = JSON.parse(cookie)
    }

    let i; 
    for (i = 0; i < initProps.length; i++){
      cookie[initProps[i]] = rest[initProps[i]];
    }
    
    console.log('cookie', cookie, rest);
  } else {
    newState = state;
    var cookie = newState;
    // console.log('newState', cookie, action.type);
    if(!skipCookie.includes(action.type)){
      setCookie('amatakStorage', JSON.stringify(cookie), 1);
    }
  }

    // console.log('newState', cookie, action.type);
  return reducer(cookie, action);
};

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(sagas);

// store.dispatch({ type: APP_INIT });

export default store;
