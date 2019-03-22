import { createStore, compose, Store } from 'redux';

import rootReducer from './root-reducer';

const initializeStore = (): Store => {
  const composeEnhancers =
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


  const initialState = {};

  const store = createStore(
    rootReducer, 
    initialState,
    composeEnhancers()
  );

  return store;
}

const store = initializeStore();

export default store;

