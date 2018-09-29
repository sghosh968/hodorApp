import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as SessionActionCreators from '../actions/session';
import AppActionButton from '../components/app-action-button';

class NewTask extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add new Task</Text>
        <AppActionButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

// State
const mapStateToProps = (state) => {
  return {
    isLoggedIn: _.get(state, 'data.session.isLoggedIn', {})
  };
};

// Actions
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SessionActionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);