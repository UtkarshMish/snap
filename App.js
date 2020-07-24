import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Alert } from "react-native";

//REACT NATIVE NAVIGATION Modules
import { NavigationContainer } from "@react-navigation/native";
import * as requestPermissions from "expo-permissions";

import styles from "./AppStyles";
import DrawerNavigation from "./src/Components/Navigation/DrawerNavigation";

export default function App()
{
  useEffect(() =>
  {
    requestUserPermission();
  }, [])
  return (
    <NavigationContainer documentTitle={{ enabled: false }} style={[styles.container, styles.bgColor]} >
      <StatusBar style="light" />
      <DrawerNavigation />
    </NavigationContainer>
  );
}

async function requestUserPermission()
{
  const { granted, canAskAgain } = await requestPermissions
    .askAsync(
      requestPermissions.CAMERA_ROLL,
      requestPermissions.LOCATION);
  if (!granted && canAskAgain)
    Alert.alert("Permission Required !", "These Permissions are required to get your images and locations", [{ text: "OK" }]);

}