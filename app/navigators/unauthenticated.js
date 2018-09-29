import { createStackNavigator } from 'react-navigation';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';

const Unauthenticated = createStackNavigator({
  Login: {
    screen: LoginPage
  },
  Signup: {
    screen: SignupPage
  }
}, {
    headerMode: 'none'
  });

export default Unauthenticated;