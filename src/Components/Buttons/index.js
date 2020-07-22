import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import buttonStyles from "./buttonStyles";
import colors from '../../../config/colors';
export default function UtilityButton({ children, failButton, onPress, color = colors.success })
{
  const textStyle = failButton == true ? buttonStyles.textFailure : { backgroundColor: color };
  return (
    <TouchableOpacity style={[buttonStyles.button, textStyle]} onPress={onPress}>
      <Text style={[buttonStyles.text]}> {children} </Text>
    </TouchableOpacity>
  );
};