import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import _ from 'lodash';

export default class TaskListItem extends Component {

  onPress = () => {
    console.log('TaskListItem pressed');
  }

  render() {
    const task = _.get(this, 'props.task');
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.listItemContainer}>
        <View>
          <Text>
            {_.get(task, 'title', '')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20
  }
});