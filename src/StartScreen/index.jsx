import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  BackHandler,
  Alert,
} from "react-native";

import styles from "./styles";
const bgImage = require("../../assets/bg-red-wall.jpg");
export default function StartScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.sideContent}>
        <Text style={styles.titleText}>Snap</Text>
        <Text style={styles.text}>An Entertainment Platform !</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button color={"#5521DD"} title={"Get Started"} />
        <Button color={"#DD1255"} title={"Exit"} onPress={alertExit} />
      </View>
    </SafeAreaView>
  );
}
function alertExit() {
  return Alert.alert("Are You Sure ?", "Press Yes to Exit this Application", [
    { text: "Cancel", style: "destructive" },
    { text: "Yes", onPress: BackHandler.exitApp, style: "cancel" },
  ]);
}
