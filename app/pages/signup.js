import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as SessionActionCreators from '../actions/session';
import firebase from 'react-native-firebase';
import Loader from '../components/loader';

class Signup extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      password: ''
    };
  }

  updateTextFieldValuesInState(value, stateKey) {
    this.setState({ [stateKey]: value });
  }

  startSignup = async () => {
    // console.log('In method startSignup');
    // console.log(this.state);
    this.props.signupPending();
    const email = _.get(this, 'state.email');
    const password = _.get(this, 'state.password');
    const signupResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // console.log('signupResult');
    // console.log(signupResult);
  }

  render() {
    return (
      <View style={{ margin: 80 }}>
        <Loader isVisible={_.get(this, 'props.pageIsAwaitingTransaction')} />
        <Text>Signup</Text>
        <TextInput
          placeholder='Enter email'
          textContentType='emailAddress'
          keyboardType='email-address'
          clearButtonMode="always"
          onChangeText={value => this.updateTextFieldValuesInState(value, 'email')}
        ></TextInput>
        <TextInput
          placeholder='Password'
          textContentType='password'
          clearButtonMode="always"
          onChangeText={value => this.updateTextFieldValuesInState(value, 'password')}
        ></TextInput>
        <Button
          title='Signup'
          onPress={() => this.startSignup()}
        ></Button>
        <Text>Already have an account?</Text>
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
        ></Button>
      </View >
    );
  }
}

// Actions
const mapDispatchToProps = dispatch => bindActionCreators(SessionActionCreators, dispatch);

// State
const mapStateToProps = state => {
  // console.log('updated state is :')
  // console.log(state);
  return {
    isLoggedIn: _.get(state, 'data.session.isLoggedIn', {}),
    pageIsAwaitingTransaction: _.get(state, 'ui.signup.awaitingTransaction', false)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);