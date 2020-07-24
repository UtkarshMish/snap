import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Alert } from "react-native";

//REACT NATIVE NAVIGATION Modules
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as requestPermissions from "expo-permissions";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Viewer from "./src/Viewer";
import Settings from "./src/Settings";
import LogIn from "./src/Authentication/LogIn";
import Register from "./src/Authentication/Register";
import ContentSelector from "./src/ContentSelector";
import colors from "./config/colors";
import { Icon } from "react-native-elements";
import AppStyles from "./AppStyles";

const options = { headerShown: false };
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="StartScreen" screenOptions={options}>
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="ContentSelector" component={ContentSelector} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Viewer" component={Viewer} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
)
const AccountTabNavigator = () => (
  <Tab.Navigator screenOptions={userScreenOptions} tabBarOptions={userBarOptions >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator >
)
async function requestUserPermission()
{
  const { granted, canAskAgain } = await requestPermissions
    .askAsync(
      requestPermissions.CAMERA_ROLL,
      requestPermissions.LOCATION);
  if (!granted && canAskAgain)
    Alert.alert("Permission Required !", "These Permissions are required to get your images and locations", [{ text: "OK" }]);

}
export default function App()
{
  useEffect(() =>
  {
    requestUserPermission();
  }, [])
  return (
    <NavigationContainer documentTitle={{ enabled: false }} style={[styles.container, styles.bgColor]} >
      <StatusBar style="light" />

      <AccountTabNavigator />
    </NavigationContainer>
  );
}

function setIcon(route, focused, color, size)
{
  const iconName = route.name == 'Home' ? 'home' : focused ? 'ios-settings' : 'settings';
  const iconType = route.name == 'Home' ? focused ? 'material-icon' : 'feather' : focused ? 'ionicon' : 'feather';

  return (<Icon name={iconName} type={iconType} size={size} color={color} />);
}
const userBarOptions = {
  activeTintColor: colors.success,
  inactiveTintColor: colors.borderColor,
  labelStyle: AppStyles.labelText,
  style: AppStyles.navStyles,
  keyboardHidesTabBar: true
};
const userScreenOptions = (({ route }) => ({ tabBarIcon: ({ focused, color, size }) => setIcon(route, focused, color, size) }));