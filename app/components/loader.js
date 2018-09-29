import React, { Component } from 'react'
import _ from 'lodash';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native'

export default class Loader extends Component {
  render() {
    const isVisible = _.get(this, 'props.isVisible', false);
    if (isVisible) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})