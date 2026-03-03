import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import members from './members.js';

export default combineReducers({
  members,
  routing: routerReducer,
});
