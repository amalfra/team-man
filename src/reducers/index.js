import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import members from './members';

export default combineReducers({
  members,
  routing: routerReducer,
  form: formReducer
});
