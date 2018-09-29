import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import * as SessionActionCreators from '../actions/session';
import RootNavigator from '../navigators/root-navigator';

class Authenticated extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <View style={styles.container}>
        {
          /*
            <Text>In Authenticated</Text>
            <Button
              title='Logout'
              onPress={() => this.props.logout()}
            ></Button>
          */
        }
        <RootNavigator />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("New Task tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { console.log("Notifications tapped!") }}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { console.log("All Tasks tapped!") }}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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
)(Authenticated);