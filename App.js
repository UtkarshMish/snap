import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Viewer from "./src/Viewer";
import Settings from "./src/Settings";
import LogIn from "./src/Authentication/LogIn";
import Register from "./src/Authentication/Register";
import ContentSelector from "./src/ContentSelector";
export default function App()
{
  return (
    <View style={[styles.container, styles.bgColor]}>
      <StatusBar style="inverted" />
      <StartScreen />

    </View>
  );
}
