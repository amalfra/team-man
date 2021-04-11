import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListComponent from './components/list';
import AddComponent from './components/add';
import EditComponent from './components/edit';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/add' component={AddComponent} />
      <Route path='/edit/:id' component={EditComponent} />
      <Route path='/' component={ListComponent} />
    </Switch>
  </BrowserRouter>
);

export default Router;
