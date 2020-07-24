import React from 'react';

import Settings from '../../Settings';
import StackNavigator from './StackNavigaor';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import AppStyles from '../../../AppStyles';
import colors from '../../../config/colors';
const Drawer = createDrawerNavigator();

const userScreenOptions = ({ route }) => ({
	drawerIcon: ({ focused, color, size }) => setIcon(route, focused, color, size),
});
const userBarOptions = {
	activeTintColor: colors.success,
	inactiveTintColor: colors.borderColor,
	labelStyle: AppStyles.labelText,
	style: AppStyles.navStyles,
	keyboardHidesTabBar: true,
};
const DrawerNavigation = () => (
	<Drawer.Navigator
		initialRouteName='Home'
		screenOptions={userScreenOptions}
		drawerContentOptions={userBarOptions}
	>
		<Drawer.Screen name='Home' component={StackNavigator} />
		<Drawer.Screen name='Settings' component={Settings} />
	</Drawer.Navigator>
);

function setIcon(route, focused, color, size) {
	const iconName = route.name == 'Home' ? 'home' : focused ? 'ios-settings' : 'settings';
	const iconType =
		route.name == 'Home'
			? focused
				? 'material-icon'
				: 'feather'
			: focused
			? 'ionicon'
			: 'feather';

	return <Icon name={iconName} type={iconType} size={size} color={color} />;
}

export default DrawerNavigation;
