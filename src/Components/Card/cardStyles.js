import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
export default cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10
  },
  textStyle: {
    fontSize: 20,
    color: colors.backgroundDark,
    textAlign: 'center'
  }
});
