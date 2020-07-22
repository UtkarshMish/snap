import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
export default cardStyles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 20,
    color: colors.backgroundDark,
    textAlign: 'center',
  }
});
