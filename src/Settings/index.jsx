import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

import styles from "./style";
import colors from "../../config/colors";
import SettingBox from "../Components/SettingBox";

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
