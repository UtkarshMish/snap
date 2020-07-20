import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import colors from '../../config/colors';
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
const styles = StyleSheet.create({

  sideContent: {
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    padding: 20,
  },
  itemBorder: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.borderColor,
    borderRadius: 10,
    elevation: 100,
  },
  text: {
    fontSize: 20,
  },
  textInfo: {
    fontStyle: "italic",
    fontSize: 18,
    includeFontPadding: true,
  },
});