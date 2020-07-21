import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";

import styles from "./style";
import UtilityButton from "../Components/Buttons";

const bgImage = require("../../assets/bg-red-wall.jpg");
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainers}>
        <UtilityButton>next</UtilityButton>
        <UtilityButton userType="failure">previous</UtilityButton>
      </View>
      <Image source={bgImage} style={styles.backgroundImage} />
    </SafeAreaView>
  );
}
