import { combineReducers } from 'redux';
import incrementReducer from './increment.reducer.js';
import localesReducer from './locales.reducer.js';

export default combineReducers({
  intl: localesReducer,
  increment: incrementReducer
});
