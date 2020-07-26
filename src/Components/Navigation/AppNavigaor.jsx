import React from 'react';

import Viewer from '../../Viewer';
import ContentSelector from '../../ContentSelector';

import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';

const Stack = createStackNavigator();
const navigationOptions = { headerShown: false, gestureEnabled: false };
const AppNavigator = () => (
	<Stack.Navigator initialRouteName={routes.MEDIACHOOSER} screenOptions={navigationOptions}>
		<Stack.Screen name={routes.MEDIACHOOSER} component={ContentSelector} />
		<Stack.Screen name={routes.PLAYER} component={Viewer} />
	</Stack.Navigator>
);

export default AppNavigator;
