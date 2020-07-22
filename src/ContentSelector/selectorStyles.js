import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default selectorStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
  },
  textStyle: {
    width: "100%",
    fontSize: 38,
    fontWeight: "800",
    color: colors.backgroundDark,
    textAlign: "center"
  },
  subContainer: {
    flex: 0.35,
    width: "auto",
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: "auto",
    flexWrap: 'wrap',
  }
});
