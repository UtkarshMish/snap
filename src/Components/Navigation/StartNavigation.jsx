import React from 'react';

import StartScreen from '../../StartScreen';
import LogIn from '../../Authentication/LogIn';
import Register from '../../Authentication/Register';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();
const navigationOptions = { headerShown: false, gestureEnabled: false };
const StartNavigator = () => (
	<Stack.Navigator initialRouteName={routes.HOMESCREEN} screenOptions={navigationOptions}>
		<Stack.Screen name={routes.HOMESCREEN} component={StartScreen} />
		<Stack.Screen name={routes.LOGIN} component={LogIn} />
		<Stack.Screen name={routes.REGISTER} component={Register} />
		<Stack.Screen name={routes.DRAWER} component={DrawerNavigation} />
	</Stack.Navigator>
);

export default StartNavigator;
