/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {store} from "./src/redux/store.js";
import {Provider} from "react-redux"
import {name as appName} from './app.json';

const RootAppWithProvider = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, () => RootAppWithProvider);
