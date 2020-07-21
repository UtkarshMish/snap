import React from 'react';
import { View, Text } from 'react-native';

import styles from "./styles";
export default function UtilityButton({ children, userType = "success" }) {
  const textStyle = userType == "failure" ? styles.textFailure : styles.textSuccess;
  return (
    <View style={styles.button}>
      <Text style={[textStyle, styles.text]}> {children} </Text>
    </View>
  );
};