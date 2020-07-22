import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import cardStyles from "./cardStyles";
import { Icon } from 'react-native-elements';
export default function Card({ title, name, type, color, size, onPress })
{
  return (
    <TouchableOpacity style={cardStyles.container} onPress={onPress}>
      <Icon name={name} type={type} size={size} color={color} />
      <Text style={cardStyles.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}
