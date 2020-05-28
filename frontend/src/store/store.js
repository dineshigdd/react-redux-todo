import { createStore , applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => (
 createStore(
     rootReducer, 
     preloadedState,
     applyMiddleware( thunk, logger )
     )

  //    store.subscribe(() => {
  //       localStorage.state = JSON.stringify(store.getState());
  //  });
  // return store;
);
 
 export default configureStore;

