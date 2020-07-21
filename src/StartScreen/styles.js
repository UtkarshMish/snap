import React from 'react';
import { StyleSheet } from 'react-native';

import colors from "../../config/colors";

export default styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",

  },
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  sideContent: {
    flex: 0.85,
    position: "relative",
    top: "30%",
    flexDirection: "column",
  },

  titleText: {
    fontSize: 55,
    textAlign: "center",
    color: colors.primary,
    padding: 15,
    fontWeight: "800",
  },
  text: {
    fontSize: 30,
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  buttonContainer: {
    flex: 0.15,
  },
  buttonTrue: {
    color: "red",
    backgroundColor: colors.switchTrue
  },
  buttonFalse: {
    backgroundColor: colors.switchFalse
  }
});
