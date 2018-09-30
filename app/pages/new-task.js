import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as TasksActionCreators from '../actions/tasks';
import * as NewTaskPageActionCreators from '../actions/new-task-page';
import AppActionButton from '../components/app-action-button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { addDocument } from '../services/firestore'
var moment = require('moment');

class NewTask extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newTask: {
        isComplete: false,
        isRecurring: false,
        title: ''
      },
      error: null,
      isDateTimePickerVisible: false,
      showNotifyAtField: false,
      formattedNotifyAt: moment().format('MMMM Do YYYY, h:mm a')
    };
  }

  updateNewTaskDataInState = (value, newTaskProperty) => {
    const newTask = _.get(this, 'state.newTask');
    newTask[newTaskProperty] = value;
    this.setState({ newTask });
  }

  updateNotifyFieldVisibility = (visibilityFlag) => {
    this.setState({ showNotifyAtField: !!visibilityFlag });
  }

  updateNotifyDateTimePickerVisibility = (visibilityFlag) => {
    this.setState({ isDateTimePickerVisible: !!visibilityFlag });
  }

  onNotifyAtConfirmed = (selectedDatetimeStamp) => {
    this.updateNewTaskDataInState(selectedDatetimeStamp, 'notifyAt');
  }

  onNotifyAtCanceled = () => {
    this.updateNotifyDateTimePickerVisibility(false);
  }

  resetComponentState = () => {
    this.setState({
      newTask: {
        isComplete: false,
        isRecurring: false,
        title: ''
      },
      isDateTimePickerVisible: false,
      showNotifyAtField: false,
      formattedNotifyAt: moment().format('MMMM Do YYYY, h:mm a')
    });
  }

  processAddTask = async () => {
    this.props.newTaskPageTransitionPending();
    const newTask = _.get(this, 'state.newTask');
    const addTaskResponse = await addDocument('tasks', newTask);
    this.props.addTask(addTaskResponse);
    this.props.newTaskPageTransitionComplete();
    this.resetComponentState();
    ToastAndroid.showWithGravity(
      'New task added',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  render() {
    const showNotifyAtField = _.get(this, 'state.showNotifyAtField', false);
    return (
      <View style={styles.container}>
        <Text>Add new Task</Text>
        <TextInput
          placeholder='Name'
          onChangeText={value => this.updateNewTaskDataInState(value, 'title')}
          value={_.get(this, 'state.newTask.title')}
          onBlur={() => { console.log('In onBlur handler') }}
        ></TextInput>
        <Text>Is a daily task ?</Text>
        <Switch
          onValueChange={(value) => this.updateNewTaskDataInState(value, 'isRecurring')}
          value={_.get(this, 'state.newTask.isRecurring')}
        />
        <Text>Do you want a reminder ?</Text>
        <Switch
          onValueChange={(value) => this.updateNotifyFieldVisibility(value)}
          value={_.get(this, 'state.showNotifyAtField')}
        />
        {
          showNotifyAtField &&
          <View>
            <Text>Notify me at</Text>
            <TouchableOpacity onPress={() => { this.updateNotifyDateTimePickerVisibility(true) }}>
              <Text>{_.get(this, 'state.formattedNotifyAt')}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={_.get(this, 'state.isDateTimePickerVisible', false)}
              onConfirm={(value) => { this.onNotifyAtConfirmed(value) }}
              onCancel={this.onNotifyAtCanceled}
              mode='datetime'
              is24Hour={false}
            />
          </View>
        }
        <Button
          title='Add task'
          onPress={() => this.processAddTask()}
        ></Button>
        < AppActionButton />
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
  return bindActionCreators({ ...TasksActionCreators, ...NewTaskPageActionCreators }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);