import 'regenerator-runtime/runtime';
import { createStore } from 'redux';
import reducers from '../reducers/';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers);
