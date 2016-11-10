import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import AppViewContainer from './src/containers/AppViewContainer';
import {AppRegistry} from 'react-native';

class ReactNativeWeather extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeather', () => ReactNativeWeather);
