import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListScreen from './screens/List';
import AddScreen from './screens/Add';
import EditScreen from './screens/Edit';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ListScreen} />
      <Route path='/add' component={AddScreen} />
      <Route path='/edit/:id' component={EditScreen} />
    </Switch>
  </BrowserRouter>
);

export default Router;
