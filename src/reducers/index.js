import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import members from './members';

const combinedReducer = combineReducers({
  members,
  routing: routerReducer,
  form: formReducer
});

export default combinedReducer;
