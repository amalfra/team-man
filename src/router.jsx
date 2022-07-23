import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListComponent from './components/list';
import AddComponent from './components/add';
import EditComponent from './components/edit';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddComponent />} />
      <Route path='/edit/:id' element={<EditComponent />} />
      <Route path='/' element={<ListComponent />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
