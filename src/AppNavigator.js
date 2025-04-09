import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddContact from './async/AddContact';
import Contact from './async/Contact';
import Intro from './async/Intro';
import Login from './screens/Login';
import MainScreen from './screens/MainScreen';

import Spash from './screens/Spash';
import RestaurantDetail from './screens/RestaurantDetail';
import UserProfileScreen from './screens/UserProfile';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Spash}
          name="Spash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainScreen}
          name="MainScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={RestaurantDetail}
          name="RestaurantDetail"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserProfileScreen}
          name="userProfile"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
