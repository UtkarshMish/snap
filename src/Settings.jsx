import * as React from "react";
import { Switch, View, StyleSheet, Text, SafeAreaView } from "react-native";
import colors from "../config/colors";

export default function Settings() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState) => {
      styles.bgColor = previousState
        ? {
            backgroundColor: colors.backgroundWhite,
            color: colors.backgroundDark,
          }
        : {
            backgroundColor: colors.backgroundDark,
            color: colors.backgroundWhite,
          };
      return !previousState;
    });
  return (
    <SafeAreaView style={[styles.container, styles.bgColor]}>
      <View style={styles.sideContent}>
        <Text style={[styles.mainTitle, styles.bgColor]}>User Settings</Text>
      </View>
      <View style={[styles.sideContent, styles.itemBorder]}>
        <Text style={[styles.text, styles.bgColor]}>Background Color</Text>
        <Text style={[styles.textInfo, styles.bgColor]}>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  sideContent: {
    flexDirection: "row",
    width: "auto",

    justifyContent: "space-between",
    padding: 20,
  },
  itemBorder: {
    borderWidth: 1.5,
    borderColor: colors.borderColor,
    borderRadius: 10,
  },
  mainTitle: {
    flex: 1,
    fontSize: 55,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "7%",
    paddingBottom: 25,
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
