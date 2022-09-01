import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import {
    TEST,
    GET_NAME,APP_REFRESH,APP_WILL_REFRESH
} from "./reducer";
import axiosDefault from "axios";
import {API_URL} from "./config";
import {normalize} from "./../../utils/normalize"
import {getCookie} from '../../utils/cookie'
const baseURL = API_URL;
export const axios = axiosDefault.create({
  baseURL
});


axios.interceptors.response.use(
    response => {
        // console.log('interceptors', response);
        return response
    },
    error => {
        try {
        if (
            error.response &&
            error.response.status === 401 
            && error.response.config.url !== `${baseURL}/user/logout`
        ) {
            //LOGOUT ACTION: user is wrong pin            
        }      
        return Promise.reject(error);
        } catch (e) {
        return Promise.reject(e);
        }
    }
);

export function* fetchTestData() {
    try {
        const testData = yield call(axios.get, "/metadata/countries");
        
        yield put({
            type: success(TEST),
            payload: {
                testData: normalize(testData)
            }
        });
    } catch (e) {
        yield put({
            type: error(TEST),
            payload:{
                errorMessage: 'Server error'
            }
        });
    }
}

export function* getNameWorker(payload) {
    try {
        yield put({
            type: success(GET_NAME),
            payload: {
                user:payload.payload
            }
        });
    } catch (e) {
        yield put({
            type: error(GET_NAME)
        });
    }
}

export function* appRefreshWorker() {
    var cookie =getCookie('amatakStorage');
    if(cookie !== null){
        cookie = JSON.parse(cookie)
      }
      delete 
      console.log("cookie func", cookie);
      
    if(cookie.user && cookie.user.login_sms && cookie.user.login_sms.token){
        yield (axios.defaults.headers.common = {
            Authorization: `Bearer ${cookie.user.login_sms.token}`,
            
        });
    }
    if(cookie.user && cookie.user.login &&cookie.user.login.token){
        yield (axios.defaults.headers.common = {
            Authorization: `Bearer ${cookie.user.login.token}`,
            
        });
    }
    try {

        yield put({
            type: success(APP_REFRESH),
        });


    } catch (e) {
        yield put({
            type: error(APP_REFRESH)
        });
    }
}

export function* appWillRefreshWorker() {
    try {
        yield put({
            type: success(APP_WILL_REFRESH),
        });
    } catch (e) {
        yield put({
            type: error(APP_WILL_REFRESH)
        });
    }
}


export function* appSaga() {
    yield takeLatest(TEST, fetchTestData);
    yield takeLatest(GET_NAME, getNameWorker);
    yield takeLatest(APP_REFRESH, appRefreshWorker);
    yield takeLatest(APP_WILL_REFRESH, appWillRefreshWorker);
}