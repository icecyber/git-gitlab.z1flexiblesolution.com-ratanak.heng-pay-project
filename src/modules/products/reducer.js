import {success,error,abort} from "redux-saga-requests";

export const  GET_PRODUCTS="GET_PRODUCTS";
export const GET_ALL_STORE="GET_ALL_STORE";
export const GET_CATEGORIES ="GET_CATEGORIES";

export const getProducts = payload=>({
    type:GET_PRODUCTS,
    payload
});
export const getAllStore=page=>({
    type:GET_ALL_STORE,
    page
})
export const getCategories=page=>({
    type:GET_CATEGORIES,
    page
})

const initialState = {
    loading: false,
    error: false,
  };


const productReducer = (state = initialState, action) => {
    switch (action.type) {
      /**
       * GetProduct
       */
      case GET_PRODUCTS:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case success(GET_PRODUCTS):         
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case error(GET_PRODUCTS):
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: true
        };
      case abort(GET_PRODUCTS):
        return { ...state, loading: false };

        /**
       * Get All store
       */
      case GET_ALL_STORE:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case success(GET_ALL_STORE):         
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case error(GET_ALL_STORE):
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: true
        };
      case abort(GET_ALL_STORE):
        return { ...state, loading: false };

         /**
       * Get Categories
       */
      case GET_CATEGORIES:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case success(GET_CATEGORIES):         
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case error(GET_CATEGORIES):
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: true
        };
      case abort(GET_CATEGORIES):
        return { ...state, loading: false };
       
      default:
        return state;
    }
  
    
    
  }
  
  export default productReducer;