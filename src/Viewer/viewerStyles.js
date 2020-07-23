import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
export default viewerStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: colors.backgroundDark,
  },

  buttonContainers: {
    flex: 0.25,
    top: 30,
    flexDirection: "row-reverse",
    shadowColor: "red",
    elevation: 1,
    alignItems: "flex-start",
  },
  backgroundImage: {
    flex: 0.6,
    width: "auto",
  },
});
