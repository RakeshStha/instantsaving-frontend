import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import transcationReducer from './transcationReducer';

export default combineReducers({
  auth: authReducer,
  transcation: transcationReducer,
  errors: errorReducer
});
