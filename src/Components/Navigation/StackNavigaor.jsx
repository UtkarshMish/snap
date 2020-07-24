import React from 'react';

import StartScreen from '../../StartScreen';
import LogIn from '../../Authentication/LogIn';
import Register from '../../Authentication/Register';
import Viewer from '../../Viewer';
import ContentSelector from '../../ContentSelector';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const navigationOptions = { headerShown: false, gestureEnabled: false };
const StackNavigator = () => (
	<Stack.Navigator initialRouteName='StartScreen' screenOptions={navigationOptions}>
		<Stack.Screen name='StartScreen' component={StartScreen} />
		<Stack.Screen name='LogIn' component={LogIn} />
		<Stack.Screen name='ContentSelector' component={ContentSelector} />
		<Stack.Screen name='Register' component={Register} />
		<Stack.Screen name='Viewer' component={Viewer} />
	</Stack.Navigator>
);

export default StackNavigator;
