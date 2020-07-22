import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import * as requestPermissions from "expo-permissions";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Viewer from "./src/Viewer";
import Settings from "./src/Settings";
import LogIn from "./src/Authentication/LogIn";
import Register from "./src/Authentication/Register";
import ContentSelector from "./src/ContentSelector";

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
    <View style={[styles.container, styles.bgColor]}>
      <StatusBar style="inverted" />
      <ContentSelector />

    </View>
  );
}
