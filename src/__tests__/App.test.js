import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import App from '../components/App';

test('renders App component with a header element', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});
