import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as SessionActionCreators from '../actions/session';

console.log('SessionActionCreators');
console.log(SessionActionCreators);

class Unauthenticated extends Component {
  constructor(...args) {
    super(...args);
  }

  startLogin = () => {
    this.props.login();
  }

  render() {
    return (
      <View style={{ margin: 80 }}>
        <Text>In Unauthenticated</Text>
        <Button
          title='Login'
          onPress={() => this.props.login()}
        ></Button>
      </View >
    );
  }
}

// Actions
const mapDispatchToProps = dispatch => bindActionCreators(SessionActionCreators, dispatch);

// State
const mapStateToProps = state => ({
  isLoggedIn: _.get(state, 'data.session.isLoggedIn', {})
});

export default connect(mapStateToProps, mapDispatchToProps)(Unauthenticated);