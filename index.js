import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import { name as appName } from './app.json';
import store from './store'; // Import the Redux store

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
