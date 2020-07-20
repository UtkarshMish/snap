import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
const bgImage = require('../assets/bg-red-wall.jpg');
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainers} >
        <Text style={styles.text}>Next!</Text>
        <Text style={styles.text}>previous!</Text>
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
    backgroundColor: "black"

  },
  backgroundImage: {
    flex: 0.75,
    width: "100%",
    height: "100%",
    marginTop: "10%",
    alignContent: "stretch"
  },
  buttonContainers: {
    flex: 0.25,
    top: "5%",
    padding: 10,
    width: "100%",
    position: "absolute",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    borderColor: "black",
    borderWidth: 2,
    color: "white",
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "green"
  }
});
