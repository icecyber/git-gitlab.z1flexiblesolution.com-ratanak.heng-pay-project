import { success, error, abort } from "redux-saga-requests";

export const TEST = 'TEST'
export const GET_NAME = 'GET_NAME'
export const APP_REFRESH = 'APP_REFRESH'
export const APP_WILL_REFRESH = 'APP_WILL_REFRESH'


export const fetchTest = () => ({
  type: TEST
});
export const getName = payload => ({
  type: GET_NAME,
  payload
});



export const appRefresh = () => ({
  type: APP_REFRESH
});

export const appWillRefresh = () => ({
  type: APP_WILL_REFRESH
});


const initialState = {
  loading: false,
  error: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TEST
     */
    case TEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(TEST):         
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(TEST):
    console.log('error TEST', action.payload);     
    return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(TEST):
      return { ...state, loading: false };
      /**
     * GET_NAME
     */
    case GET_NAME:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(GET_NAME): 
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case error(GET_NAME):
      return {
        ...state,
        loading: false,
      };
    case abort(GET_NAME):
      return { ...state, loading: false };
    /**
     * DEFAULT CASE
     */
    default:
      return state;
  }
}

export default registerReducer;