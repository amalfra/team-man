import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Router from './router';
import combinedReducer from './reducers';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const store = createStore(combinedReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);
