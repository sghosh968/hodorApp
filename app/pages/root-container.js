import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import RootNavigator from '../navigators/root-navigator';
import Unauthenticated from '../navigators/unauthenticated';
import firebase from 'react-native-firebase';

class RootContainer extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  render() {
    const isLoggedIn = _.get(this, 'props.isLoggedIn');
    if (isLoggedIn) {
      return <RootNavigator />;
    }
    return <Unauthenticated />;
  }
}

// State
const mapStateToProps = (state) => ({
  isLoggedIn: _.get(state, 'data.session.isLoggedIn', {})
});

export default connect(
  mapStateToProps
)(RootContainer);