import { call, put, takeLatest } from "redux-saga/effects";
import {error,success} from "redux-saga-requests";
import {axios} from "../app";
import {GET_PRODUCTS,GET_ALL_STORE,GET_CATEGORIES} from '../../modules/products/reducer'
import {normalize} from "./../../utils/normalize"

export function* getProductWorker({ payload }) {
    try {
        const products_home = yield call(axios.get, "/products/home/"+payload);
        //console.log('products_home',normalize(products_home));
        const requested = normalize(products_home)
        yield put({
            type: success(GET_PRODUCTS),
            payload: {
                products_home: requested
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
            type: error(GET_PRODUCTS),
            payload: {
                errorProduct:"Error Get Product"
            }
        });
    }
}

export function* getAllStoreWorker({ page }) {
    try {
        const allStore_home = yield call(axios.get, "/stores/all/"+page);
        //console.log('products_home',normalize(products_home));
        const requested = normalize(allStore_home)
        yield put({
            type: success(GET_ALL_STORE),
            payload: {
                allStore_home: requested
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
            type: error(GET_ALL_STORE),
            payload: {
                errorProduct:"Error Get Product"
            }
        });
    }
}

export function* getCategoriesProductWorker() {
    try {
        const getCategories_home = yield call(axios.get,"/categories");
        // console.log('getCategories_home',normalize(getCategories_home));
        const requested = normalize(getCategories_home)
        yield put({
            type: success(GET_CATEGORIES),
            payload: {
                getCategories_home: requested
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
            type: error(GET_CATEGORIES),
            payload: {
                errorProduct:"Error Get Product"
            }
        });
    }
}
export function* productSaga() {
    yield takeLatest(GET_PRODUCTS,getProductWorker);
    yield takeLatest(GET_ALL_STORE,getAllStoreWorker);
    yield takeLatest(GET_CATEGORIES,getCategoriesProductWorker);
}
