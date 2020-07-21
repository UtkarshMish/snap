import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  BackHandler,
  Alert,
  ImageBackground,
} from "react-native";

import styles from "./styles";
import UtilityButton from "../Components/Buttons";
const bgImage = require("../../assets/HomeScreen.gif");
export default function StartScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={bgImage}
        blurRadius={100}
        style={styles.backgroundImage}
      />
      <View style={styles.sideContent}>
        <Text style={styles.titleText}>Snap</Text>
        <Text style={styles.text}>An Entertainment Platform !</Text>
      </View>
      <View style={styles.buttonContainer}>
        <UtilityButton>Get Started</UtilityButton>
        <UtilityButton failButton={true} onPress={alertExit}>
          Exit
        </UtilityButton>
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
