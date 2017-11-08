import React from 'react';
import { Route, Switch } from 'react-router';

import ListComponent from './components/List';
import AddComponent from './components/Add';
import EditComponent from './components/Edit';

const Routes = (
  <Switch>
    <Route path='/add' component={AddComponent} />
    <Route path='/edit/:id' component={EditComponent} />
    <Route path='/' component={ListComponent} />
  </Switch>
);

export default Routes;
