import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Routes from './routes';
import combinedReducer from './reducers';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const history = createBrowserHistory();
const middleware = routerMiddleware(history)
const store = createStore(combinedReducer, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history} children={Routes} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
