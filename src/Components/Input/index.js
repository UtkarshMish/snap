import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import inputStyles from './inputStyles';

const FormInput = ({
  children, style, size = 24, iconName, color, type, ...rest
}) => (
    <View style={[inputStyles.container, style]}  >
      <Icon size={size} name={iconName} type={type} color={color} style={inputStyles.icon} />
      <TextInput style={inputStyles.input} {...rest} />
      {children}
    </View>
  );

export default FormInput;
