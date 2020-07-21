import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles";
export default function UtilityButton({ children, failButton, onPress }) {
  const textStyle = failButton == true ? styles.textFailure : styles.textSuccess;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[textStyle, styles.text]}> {children} </Text>
    </TouchableOpacity>
  );
};