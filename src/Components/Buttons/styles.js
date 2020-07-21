import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
export default styles = StyleSheet.create({

  button: {
    flex: 1,
    shadowColor: colors.secondary,
    shadowOffset: { height: -10, width: 20 },
    shadowRadius: 100,
    elevation: 10,
  },
  textFailure: {
    backgroundColor: colors.failure,
  },
  text: {
    textTransform: "capitalize",
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    color: colors.fontColor,
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
  },
  textSuccess: {
    backgroundColor: colors.success,
  },
});