import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Router from './router';
import combinedReducer from './reducers';

import './app.css';

const store = createStore(combinedReducer)

const container = document.getElementById('app');
const root = createRoot(container); 

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
