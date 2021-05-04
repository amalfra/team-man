import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import Edit from "./edit";
import reducers from "../reducers";

const store = createStore(reducers, {});

const Wrapped = (props = {}) => (
  <MemoryRouter>
    <Provider store={store}>
      <Edit {...props} />
    </Provider>
  </MemoryRouter>
);

describe('edit', () => {
  it('renders', () => {
    const { container } = render(<Wrapped match={{ params: { id: '1' } }} />);
    const editScreen = container.querySelector('#edit-screen');

    expect(editScreen).toBeTruthy();
  });
});
