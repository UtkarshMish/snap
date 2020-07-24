import React from "react";
import { StyleSheet } from "react-native";
import colors from "./config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Noto",
  },
  bgColor: {
    backgroundColor: colors.backgroundDark,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navStyles: {
    backgroundColor: colors.backgroundDark,
  }
});
