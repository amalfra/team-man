import React from 'react';
import { Route, Switch } from 'react-router';

import ListComponent from './components/list';
import AddComponent from './components/add';
import EditComponent from './components/edit';

const Routes = (
  <Switch>
    <Route path='/add' component={AddComponent} />
    <Route path='/edit/:id' component={EditComponent} />
    <Route path='/' component={ListComponent} />
  </Switch>
);

export default Routes;
