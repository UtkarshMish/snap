import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
export default buttonStyles = StyleSheet.create({
  button: {
    flex: 1,
    shadowColor: colors.secondary,
    borderRadius: 10,
    padding: "3%",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textFailure: {
    backgroundColor: colors.failure,
  },
  text: {
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.fontColor,
    fontSize: 20,
  },
  textSuccess: {
    backgroundColor: colors.success,
  },
});
