import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
const LogIn = () => {
  return (
    <View style={styles.container}>
      <UtilityButton>Login</UtilityButton>
      <UtilityButton color={colors.switchTrue}>Register</UtilityButton>
    </View>
  );
};

export default LogIn;
