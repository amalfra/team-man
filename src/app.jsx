import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Router from './router';
import combinedReducer from './reducers';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const store = createStore(combinedReducer);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
