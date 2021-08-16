/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {store} from './src/redux/store.js';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {MenuProvider} from 'react-native-popup-menu';
const RootAppWithProvider = () => (
  <Provider store={store}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootAppWithProvider);
