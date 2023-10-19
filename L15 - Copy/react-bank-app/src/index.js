// Import necessary dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// 'Provider' is a React component from 'react-redux' that makes the Redux store available to any nested components.
import { Provider } from 'react-redux';

// Import the Redux store that we previously created.
import store from './store/store';

// Import the main 'App' component of the application.
import App from './App';

// Import the main CSS stylesheet for styling the application.
import './index.css';

// Render the application into the DOM.
// The 'Provider' component wraps the 'App' to ensure that the entire app has access to the Redux store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // The target DOM node where the app will be mounted.
  document.getElementById('root')
);
