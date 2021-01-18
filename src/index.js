import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  </Provider>,
  document.getElementById('root')
);
