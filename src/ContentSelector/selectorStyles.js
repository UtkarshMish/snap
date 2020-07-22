import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default selectorStyles = StyleSheet.create({
  container: {
    flex: 0.85,
    width: "100%",
    height: "100%"
  },
  textStyle: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.trackTrue,
    textAlign: "center"
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
