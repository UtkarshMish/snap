import React from 'react';

import Settings from '../../Settings';
import AppNavigator from './AppNavigaor';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import AppStyles from '../../../AppStyles';
import colors from '../../../config/colors';
import routes from './routes';
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
		initialRouteName={routes.MEDIACHOOSER}
		screenOptions={userScreenOptions}
		drawerContentOptions={userBarOptions}
	>
		<Drawer.Screen name={routes.MEDIACHOOSER} component={AppNavigator} />
		<Drawer.Screen name={routes.SETTINGS} component={Settings} />
	</Drawer.Navigator>
);

function setIcon(route, focused, color, size) {
	const iconName =
		route.name == routes.MEDIACHOOSER ? 'home' : focused ? 'ios-settings' : 'settings';
	const iconType =
		route.name == routes.MEDIACHOOSER
			? focused
				? 'material-icon'
				: 'feather'
			: focused
			? 'ionicon'
			: 'feather';

	return <Icon name={iconName} type={iconType} size={size} color={color} />;
}

export default DrawerNavigation;
