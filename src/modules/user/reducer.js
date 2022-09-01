import { success, error, abort } from "redux-saga-requests";

export const LOGIN = 'LOGIN'
export const LOGIN_SMS = 'LOGIN_SMS'

export const userLogin = payload => ({
  type: LOGIN,
  payload
});

export const userLoginSMS = payload => ({
  type: LOGIN_SMS,
  payload
});

const initialState = {
  loading: false,
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * LOGIN
     */
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(LOGIN):     
    console.log("action.payload",action.payload);
        
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(LOGIN):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(LOGIN):
      return { ...state, loading: false };

      /**
     * LOGIN_SMS
     */
    case LOGIN_SMS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case success(LOGIN_SMS):         
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case error(LOGIN_SMS):
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: true
      };
    case abort(LOGIN_SMS):
      return { ...state, loading: false };
    default:
      return state;
  }

  
  
}

export default loginReducer;