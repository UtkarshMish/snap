import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
export default styles = StyleSheet.create({

  button: {
    flex: 1,
    shadowColor: colors.secondary,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-around"

  },
  textFailure: {
    backgroundColor: colors.failure,
  },
  text: {
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.fontColor,
    fontSize: 30,
  },
  textSuccess: {
    backgroundColor: colors.success,
  },
});