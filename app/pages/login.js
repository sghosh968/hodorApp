import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import firebase from 'react-native-firebase';
import * as SessionActionCreators from '../actions/session';
import Loader from '../components/loader';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  updateTextFieldValuesInState(value, stateKey) {
    this.setState({ [stateKey]: value });
  }

  startLogin = () => {
    // console.log('In method startLogin');
    // console.log(this.state);
    this.props.loginPending();
    const email = _.get(this, 'state.email');
    const password = _.get(this, 'state.password');
    firebase.auth().signInWithEmailAndPassword(email, password).then((loginResponse) => {
      // console.log('loginResponse');
      // console.log(loginResponse);
      this.props.loginSuccess();
      this.props.login();
    })
      .catch((loginError) => {
        this.props.loginError();
        const error = 'Error logging in, make sure you got the email & password right.'
        this.setState({ error });
      })
  }

  render() {
    const error = _.get(this.state, 'error');
    const showErrorMessage = _.isEmpty(error) === false;
    return (
      <View style={{ margin: 80 }}>
        <Loader isVisible={_.get(this, 'props.pageIsAwaitingTransaction')} />
        <Text>Login</Text>
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
        {showErrorMessage && <Text>{error}</Text>}
        <Button
          title='Login'
          onPress={() => this.startLogin()}
          disabled={_.get(this, 'state.email') === '' || _.get(this, 'state.password') === ''}
        ></Button>
        <Text>Don't have an account ?</Text>
        <Button
          title='Signup'
          onPress={() => this.props.navigation.navigate('Signup')}
        ></Button>
      </View >
    );
  }
}

// Actions
const mapDispatchToProps = dispatch => bindActionCreators(SessionActionCreators, dispatch);

// State
const mapStateToProps = state => ({
  isLoggedIn: _.get(state, 'data.session.isLoggedIn', {}),
  pageIsAwaitingTransaction: _.get(state, 'ui.login.awaitingTransaction', false)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);