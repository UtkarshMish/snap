import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
export default cardStyles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    width: 125,
    borderWidth: 1,
    elevation: 20,
    borderRadius: 20,
    backgroundColor: colors.switchFalse,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 20,
    color: colors.backgroundDark,
    textAlign: 'center',
  }
});
