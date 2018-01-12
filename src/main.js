import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counterreducer from './counter.reducer';
import App from './App';
let store = createStore(Counterreducer);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));