import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/index.js';

export default history => createStore(reducers, applyMiddleware(routerMiddleware(history)));
