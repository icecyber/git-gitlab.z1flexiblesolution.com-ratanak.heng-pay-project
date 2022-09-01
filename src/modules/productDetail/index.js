import { call, put, takeLatest } from "redux-saga/effects";
import {error,success} from "redux-saga-requests";
import {axios} from "../app";
import {PRODUCT_DETAIN,GET_SKU_PRODUCT} from '../../modules/productDetail/reducer'
import {normalize} from "./../../utils/normalize"

export function* getProductDetailWorker({ payload }) {
    try {
        const product_detail = yield call(axios.get,"/products/detail/"+payload );
        //console.log('product_detail',normalize(product_detail));
        const requested = normalize(product_detail)
        yield put({
            type: success(PRODUCT_DETAIN),
            payload: {
                product_detail: requested
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
            type: error(PRODUCT_DETAIN),
            payload: {
                errorProduct:"Error Get Product Detail"
            }
        });
    }
}


export function* getGetSkuProduct({ payload }) {
    try {
        const sku_product = yield call(axios.get,"/get_sku/"+payload );
        // console.log('sku_product',normalize(sku_product));
        // return
        const requested = normalize(sku_product)
        yield put({
            type: success(GET_SKU_PRODUCT),
            payload: {
                sku_product: requested
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
            type: error(GET_SKU_PRODUCT),
            payload: {
                errorProduct:"Error Get SKU"
            }
        });
    }
}



export function* productDetailSaga() {
    yield takeLatest(PRODUCT_DETAIN,getProductDetailWorker);
    yield takeLatest(GET_SKU_PRODUCT,getGetSkuProduct);
}
