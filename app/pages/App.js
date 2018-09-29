/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import store from '../store';
import RootContainer from './root-container';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
