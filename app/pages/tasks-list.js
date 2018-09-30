import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as TasksActionCreators from '../actions/tasks';
import AppActionButton from '../components/app-action-button';
import { getCollection } from '../services/firestore';
import Loader from '../components/loader';
import TaskListItem from '../components/task-list-item';

class TasksList extends Component {
  constructor(...args) {
    super(...args);
  }

  componentWillMount = async () => {
    this.props.fetchTasksPending();
    const tasks = await getCollection('tasks');
    this.props.setTasks(tasks);
    this.props.fetchTasksSuccess();
  }



  render() {
    const pageIsAwaitingTransaction = _.get(this, 'props.pageIsAwaitingTransaction', false);
    const tasks = _.get(this, 'props.tasks', []);
    return (
      <View style={styles.container}>
        {pageIsAwaitingTransaction && <Loader isVisible={pageIsAwaitingTransaction} />}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, separators }) => (
            <TaskListItem task={item} />
          )}

        />
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
    isLoggedIn: _.get(state, 'data.session.isLoggedIn', {}),
    tasks: _.get(state, 'data.tasks.tasks'),
    pageIsAwaitingTransaction: _.get(state, 'data.tasks.awaitingTransaction', false)
  };
};

// Actions
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TasksActionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);