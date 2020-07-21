import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles";
import colors from '../../../config/colors';
export default function UtilityButton({ children, failButton, onPress, color = colors.success }) {
  const textStyle = failButton == true ? styles.textFailure : { backgroundColor: color };
  return (
    <TouchableOpacity style={[styles.button, textStyle]} onPress={onPress}>
      <Text style={[styles.text]}> {children} </Text>
    </TouchableOpacity>
  );
};