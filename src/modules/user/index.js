import { call, put,takeLatest} from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import { axios } from "../app";
import {LOGIN, LOGIN_SMS} from "./reducer";
import {normalize} from "./../../utils/normalize"


//fun connect with api
export function* userLoginSMSWorker({ payload }) {
    try {
        const login_sms = yield call(axios.get, "/login_sms/"+payload);
        console.log('login_sms', normalize(login_sms));
        const requested = normalize(login_sms)
        yield put({
            type: success(LOGIN_SMS),
            payload: {
                login_sms: requested
            }
        });
        if(requested.token){
           // axios.defaults.headers.common['Authorization'] = `Bearer ${requested.token}`;
            yield (axios.defaults.headers.common = {
                Authorization: `Bearer ${requested.token}`,
                
            });
        }
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        yield put({
            type: error(LOGIN_SMS),
            payload: {
                errorSMS:"Internal server error, please try again"
            }
        });
    }
}

export function* userLoginWorker({ payload }) {
    try {
        // console.log('payload', payload);
        
        const login = yield call(axios.post, "/user_login/",payload);
        console.log('login', normalize(login));
        // return
        const requested = normalize(login)
        yield put({
            type: success(LOGIN),
            payload: {
                login: requested
            }
        });
        if(requested.token){
           // axios.defaults.headers.common['Authorization'] = `Bearer ${requested.token}`;
            yield (axios.defaults.headers.common = {
                Authorization: `Bearer ${requested.token}`,
                
            });
        }
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError;
        console.log(parseError);
        yield put({
            type: error(LOGIN),
            payload: {
                errorLogin:"error"
            }
        });
    }
}




export function* userSaga() {
    yield takeLatest(LOGIN_SMS, userLoginSMSWorker);
    yield takeLatest(LOGIN, userLoginWorker);
}

  