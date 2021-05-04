import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import List from "./list";
import reducers from "../reducers";

const store = createStore(reducers, {});

const Wrapped = (props = {}) => (
  <MemoryRouter>
    <Provider store={store}>
      <List {...props} />
    </Provider>
  </MemoryRouter>
);

describe('list', () => {
  it('renders', () => {
    const { container } = render(<Wrapped />);
    const listScreen = container.querySelector('#list-screen');

    expect(listScreen).toBeTruthy();
  });
});
