import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import Router from './router';
import combinedReducer from './reducers';

import '@mantine/core/styles.css';
import './app.css';

const store = createStore(combinedReducer);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <MantineProvider>
      <Router />
    </MantineProvider>
  </Provider>
);
