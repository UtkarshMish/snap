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
    top: 25,
    flexDirection: "row-reverse",
    shadowColor: "red",
    elevation: 1,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    borderRadius: 10,
    width: "100%",
    height: "100%",
    zIndex: -999,
  },
});
