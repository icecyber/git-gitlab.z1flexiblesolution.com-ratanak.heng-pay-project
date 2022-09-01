import { all } from "redux-saga/effects";
import { appSaga } from "../modules/app";
import { userSaga } from "../modules/user";
import {productSaga} from '../modules/products';
import {productDetailSaga} from '../modules/productDetail'

// import {skuproductSaga} from '../modules/skuProduct'
const sagas = [
  appSaga(),
  userSaga(),
  productSaga(),
  productDetailSaga(),
  // skuproductSaga()
];

export default function*() {
  yield all(sagas);
}
