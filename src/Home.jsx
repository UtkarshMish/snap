import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import colors from "../config/colors";
const bgImage = require("../assets/bg-red-wall.jpg");
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainers}>
        <Text style={[styles.text, styles.textSuccess]}>Next</Text>
        <Text style={[styles.text, styles.textFailure]}>previous</Text>
      </View>
      <Image source={bgImage} style={styles.backgroundImage} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: colors.backgroundDark,
  },
  backgroundImage: {
    flex: 0.75,
    width: "100%",
    height: "100%",
    marginTop: "10%",
    alignContent: "stretch",
  },
  buttonContainers: {
    flex: 0.25,
    top: "5%",
    padding: 25,
    width: "100%",
    position: "absolute",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    shadowColor: "red",
    shadowOffset: { height: -10, width: 20 },
    shadowRadius: 100,
    elevation: 10,
  },
  textFailure: {
    backgroundColor: colors.failure,
  },
  text: {
    textTransform: "capitalize",
    borderColor: "black",
    borderWidth: 2,
    color: colors.fontColor,
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
  },
  textSuccess: {
    backgroundColor: colors.success,
  },
});
