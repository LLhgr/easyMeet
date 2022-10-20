import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Meeting from './src/pages/Meeting/index';
import NewMeeting from './src/pages/NewMeeting';
import Details from './src/pages/Details';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Meeting'>
        <Stack.Screen
          name='Meeting'
          component={Meeting}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          name='New Meeting'
          component={NewMeeting}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

