import { createStackNavigator } from 'react-navigation';
import TasksList from '../pages/tasks-list';
import TaskDetails from '../pages/task-details';
import TaskEdit from '../pages/task-edit';
import NewTask from '../pages/new-task';

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
  },
  NewTask: {
    screen: NewTask,
    navigationOptions: ({ navigation }) => ({
      title: 'Add new task',
    })
  }
});

export default RootNavigator;