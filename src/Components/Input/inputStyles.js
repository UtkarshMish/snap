import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export default inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 5,
    marginRight: 5,

  }
  , input: {
    flex: 1,
    alignItems: 'stretch',
  }
});