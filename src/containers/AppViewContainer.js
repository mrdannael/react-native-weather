import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class AppViewContainer extends Component {
  render() {
    return (
      <Image style={styles.container} source={require('../../images/bg.png')}>
        <View style={styles.logo}>
          <Image source={require('../../images/suncloud.png')} />
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
