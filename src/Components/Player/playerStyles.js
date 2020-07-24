import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
export default playerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  subContainer: {
    width: "100%",
    padding: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: colors.switchTrue,
  },
  SeekBar: {
    padding: 10,
    width: "100%",
    backgroundColor: colors.switchTrue,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
    alignContent: 'stretch',

  }
})