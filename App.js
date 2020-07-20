import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StartScreen from "./src/StartScreen";
import Home from "./src/Home";
export default function App() {
  return (
    <View style={[styles.container, styles.bgColor]}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Noto",
  },
  bgColor: {
    backgroundColor: "aliceblue",
  },
});
