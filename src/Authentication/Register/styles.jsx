import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "5%",
    width: "100%",
    height: "auto",
    margin: "auto",
    paddingLeft: 50,
    paddingRight: 50,
  },
  mainTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 55,
    fontWeight: "900",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0.6,
    marginTop: 50,
    marginBottom: 50,
  },
  textStyle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.trackTrue,
    borderRadius: 15,
    marginBottom: "2%",
    fontSize: 20,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.4,
    paddingTop: 20,
    paddingBottom: 20,
  },
  error: {
    color: colors.failure,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
});
