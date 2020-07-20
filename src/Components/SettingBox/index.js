import React from 'react';
import { View, Text, Switch } from 'react-native';
import colors from '../../../config/colors';
import styles from "../SettingBox/styles";

export default function SettingBox({ children, toggleSwitch, isEnabled, bgColor }) {
  bgColor = bgColor && bgColor.color == "aliceblue" ? bgColor : null;
  return (
    <View style={[styles.sideContent, styles.itemBorder]}>
      <Text style={[styles.text, bgColor]}>{children}</Text>
      <Text style={[styles.textInfo, bgColor]}>
        {isEnabled ? "Black" : "White"}
      </Text>
      <Switch
        trackColor={{ false: colors.trackFalse, true: colors.trackTrue }}
        thumbColor={isEnabled ? colors.switchTrue : colors.switchFalse}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};