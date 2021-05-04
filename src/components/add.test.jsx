import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import Add from "./add";
import reducers from "../reducers";

const store = createStore(reducers, {});

const Wrapped = (props = {}) => (
  <MemoryRouter>
    <Provider store={store}>
      <Add {...props} />
    </Provider>
  </MemoryRouter>
);

describe('add', () => {
  it('renders', () => {
    const { container } = render(<Wrapped />);
    const addScreen = container.querySelector('#add-screen');

    expect(addScreen).toBeTruthy();
  });
});
