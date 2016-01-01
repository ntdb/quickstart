import { createStore } from 'redux';
import rootReducer from './data/reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./data/reducer', () => {
      const nextReducer = require('./data/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
