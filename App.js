import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import styles from "./AppStyles";
import StartScreen from "./src/StartScreen";
import Home from "./src/Home";
import Settings from "./src/Settings";
export default function App() {
  return (
    <View style={[styles.container, styles.bgColor]}>
      <StatusBar style="inverted" />
      <StartScreen />
    </View>
  );
}
