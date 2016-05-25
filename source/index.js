import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app.container';
import configureStore from './store/configureStore';

import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
