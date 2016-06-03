import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import devTools from 'remote-redux-devtools';


export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk), devTools())
  );
};
