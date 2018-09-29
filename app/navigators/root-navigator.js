import { createStackNavigator } from 'react-navigation';
import TasksList from '../pages/tasks-list';
import TaskDetails from '../pages/task-details';
import TaskEdit from '../pages/task-edit';

const RootNavigator = createStackNavigator({
  AllTasks: {
    screen: TasksList,
    navigationOptions: ({ navigation }) => ({
      title: 'All Tasks',
    })
  },
  TaskDetails: {
    screen: TaskDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Task Details',
    })
  },
  EditTask: {
    screen: TaskEdit,
    navigationOptions: ({ navigation }) => ({
      title: 'Update task',
    })
  }
});

export default RootNavigator;