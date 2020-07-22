import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import cardStyles from "./cardStyles";
export default function Card()
{
  return (
    <SafeAreaView style={cardStyles.container} >
      <Text>HI</Text>
    </SafeAreaView>
  )
}
