import * as React from "react";
import { Switch, View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function Settings() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState) => {
      styles.bgColor = previousState
        ? {
          backgroundColor: "aliceblue",
        }
        : {
          backgroundColor: "black",
        };
      return !previousState;
    });
  return (
    <View style={styles.sideContent}>
      <Switch
        trackColor={{ false: colors.trackFalse, true: colors.trackTrue }}
        thumbColor={isEnabled ? "#f0C" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sideContent: {
    flex: 1,
    position: "absolute",
    padding: 20,
    bottom: 1,
    right: 1,
  },
});
