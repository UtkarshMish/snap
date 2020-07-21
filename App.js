import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Home from "./src/Home";
import Settings from "./src/Settings";
import LogIn from "./src/Authentication/LogIn";
import Register from "./src/Authentication/Register";
export default function App() {
  return (
    <View style={[styles.container, styles.bgColor]}>
      <StatusBar style="inverted" />
      <Register />
    </View>
  );
}
