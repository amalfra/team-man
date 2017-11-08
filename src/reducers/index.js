import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import members from './members';

const combinedReducer = combineReducers({
  members,
  routing: routerReducer
});

export default combinedReducer;
