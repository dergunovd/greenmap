import 'regenerator-runtime/runtime';
<<<<<<< Updated upstream
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
=======
import { compose, createStore } from 'redux';
>>>>>>> Stashed changes
import reducers from '../reducers/';
import { watchedSagas } from '../sagas/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
<<<<<<< Updated upstream
const sagaMiddleware = createSagaMiddleware();
export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchedSagas);
=======

export default createStore(reducers, composeEnhancers());
>>>>>>> Stashed changes
