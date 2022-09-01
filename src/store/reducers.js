import { routerReducer } from "react-router-redux";
import appReducer from "../modules/app/reducer";
import userReducer from "../modules/user/reducer";
import productReducer from "../modules/products/reducer"
import productDetail from "../modules/productDetail/reducer"

// import skuProduct from "../modules/skuProduct/reducers"
export default {
  app: appReducer,
  product: productReducer,
  user: userReducer,
  router: routerReducer,
  productDetail:productDetail,
  // skuProduct:skuProduct
};
