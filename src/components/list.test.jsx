import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import List from './list';
import reducers from '../reducers';

const store = createStore(reducers, {});

const Wrapped = (props = {}) => (
  <MemoryRouter>
    <Provider store={store}>
       <MantineProvider>
        <List {...props} />
       </MantineProvider>
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
