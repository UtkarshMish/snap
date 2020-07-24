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
    padding: "3%",
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  SeekBar: {
    padding: 10,
    width: "100%",
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
    alignContent: 'stretch',

  },
  gradientBackground: {
    flex: 1,
    opacity: 0.95,
    borderRadius: 10,
  },
  gradientController: {
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.backgroundDark,
  },
  iconStyles: {
    padding: 10,
    elevation: 150,
    shadowColor: colors.backgroundDark,
    shadowOpacity: 1,
  }
})