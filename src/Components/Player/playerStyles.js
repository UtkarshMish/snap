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
    backgroundColor: colors.musicColor,
  },
  SeekBar: {
    marginBottom: "5%",
    paddingBottom: "5%",
    margin: 'auto',
    width: "40%",
    backgroundColor: colors.musicColor,
    transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }],
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
    alignContent: 'stretch',

  }
})