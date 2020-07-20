import * as React from "react";
import {
  Switch,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";
import colors from "../config/colors";
import SettingBox from "./Components/SettingBox";

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
      <SettingBox
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
        bgColor={styles.bgColor}
      >
        Background Color
      </SettingBox>
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
  mainTitle: {
    flex: 1,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
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
