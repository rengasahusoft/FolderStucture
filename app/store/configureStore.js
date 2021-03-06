import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers'
import createLogger from 'redux-logger';

const logger = createLogger();
export default function configureStore() {
  const store = createStore(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
