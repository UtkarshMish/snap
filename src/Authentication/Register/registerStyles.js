import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 'auto',
  },
  mainTitle: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "900",
    marginBottom: "5%",
  },
  inputContainer: {
    paddingLeft: "15%",
    paddingRight: "15%",

  },
  textStyle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.trackTrue,
    borderRadius: 15,
    margin: 'auto',
    fontSize: 20,
    padding: 10,
  },
  buttonContainer: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  error: {
    color: colors.failure,
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
});
