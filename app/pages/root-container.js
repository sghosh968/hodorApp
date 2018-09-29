import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated';
import RootNavigator from '../navigators/root-navigator';

class RootContainer extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    console.log('In render for RootContainer');
    console.log('this.props');
    console.log(this.props);
    const isLoggedIn = _.get(this, 'props.isLoggedIn');
    console.log('isLoggedIn');
    console.log(isLoggedIn);
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