import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  form: reducer,
  routing: routerReducer
});

export default rootReducer;
