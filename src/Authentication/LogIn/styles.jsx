import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "20%",
    width: "100%",
    height: "100%",
    marginTop: 30,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  inputContainer: {
    flex: 1,
  },
  textStyle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.trackTrue,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 24,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
  },
});
