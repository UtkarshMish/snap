import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Alert } from "react-native";

//REACT NATIVE NAVIGATION Modules
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import * as requestPermissions from "expo-permissions";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Viewer from "./src/Viewer";
import Settings from "./src/Settings";
import LogIn from "./src/Authentication/LogIn";
import Register from "./src/Authentication/Register";
import ContentSelector from "./src/ContentSelector";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="StartScreen" screenOptions={options}>
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="ContentSelector" component={ContentSelector} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Viewer" component={Viewer} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
)
async function requestUserPermission()
{
  const { granted, canAskAgain } = await requestPermissions.askAsync(requestPermissions.CAMERA_ROLL, requestPermissions.LOCATION);
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
      <StatusBar style="auto" />

      <StackNavigator />
    </NavigationContainer>
  );
}

const options = { headerShown: false };
