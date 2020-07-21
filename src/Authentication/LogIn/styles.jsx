import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "3%",
    width: "100%",
    height: "100%",
    margin: "auto",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  mainTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 55,
    fontWeight: "900",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  textStyle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.trackTrue,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 20,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.4,
    paddingBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: colors.failure,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
});
