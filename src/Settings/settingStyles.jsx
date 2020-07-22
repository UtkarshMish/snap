import React from "react";
import colors from "../../config/colors";
import { StyleSheet, Platform } from "react-native";

export default settingStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  sideContent: {
    flexDirection: "row",
    width: "auto",

    justifyContent: "space-between",
    padding: 20,
  },
  mainTitle: {
    flex: 1,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontSize: 55,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "7%",
    paddingBottom: 25,
  },
  text: {
    fontSize: 20,
  },
  textInfo: {
    fontStyle: "italic",
    fontSize: 18,
    includeFontPadding: true,
  },
});
