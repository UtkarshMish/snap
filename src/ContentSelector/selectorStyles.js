import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default selectorStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
  },
  textStyle: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.trackTrue,
    textAlign: "center"
  },
  subContainer: {
    flex: 0.4,
    width: "auto",
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    flexWrap: 'wrap',
  }
});
