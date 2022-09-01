import {success,error,abort} from "redux-saga-requests";


export const  PRODUCT_DETAIN="PRODUCT_DETAIN";
export const GET_SKU_PRODUCT="GET_SKU_PRODUCT";

export const getProductDetail = payload=>({
    type:PRODUCT_DETAIN,
    payload
});

export const getSKUProduct = payload=>({
  type:GET_SKU_PRODUCT,
  payload
});


const initialState = {
    loading: false,
    error: false
  };


const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      /**
       * GetProduct
       */
      case PRODUCT_DETAIN:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case success(PRODUCT_DETAIN):         
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case error(PRODUCT_DETAIN):
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: true
        };
      case abort(PRODUCT_DETAIN):
        return { ...state, loading: false };
        
        /**
       * GetSKUProduct
       */
      case GET_SKU_PRODUCT:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case success(GET_SKU_PRODUCT):         
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case error(GET_SKU_PRODUCT):
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: true
        };
      case abort(GET_SKU_PRODUCT):
        return { ...state, loading: false };

      default:
        return state;
    }
  
    
    
  }
  
  export default productDetailReducer;