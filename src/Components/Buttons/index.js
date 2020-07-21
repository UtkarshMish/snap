import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles";
export default function UtilityButton({ children, failButton, onPress }) {
  const textStyle = failButton == true ? styles.textFailure : styles.textSuccess;
  return (
    <TouchableOpacity style={[styles.button, textStyle]} onPress={onPress}>
      <Text style={[styles.text]}> {children} </Text>
    </TouchableOpacity>
  );
};