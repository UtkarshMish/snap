import React, { useState } from "react";
import { View, ScrollView, TextInput, Alert } from "react-native";
import styles from "./styles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
import style from "../../Home/style";
const LogIn = () => {
  const handleLogin = () => {
    Alert.alert(
      "Success !",
      `Username: ${username} and Password: ${password}`,
      [{ text: "No" }, { text: "Yes" }]
    );
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          clearButtonMode="always"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.textStyle}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
        />
        <TextInput
          clearButtonMode="always"
          secureTextEntry={true}
          textContentType={"password"}
          underlineColorAndroid={"transparent"}
          keyboardType={"visible-password"}
          onChangeText={(password) => setPassword(password)}
          style={styles.textStyle}
          autoCorrect={false}
          placeholder="password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <UtilityButton onPress={handleLogin}>Login</UtilityButton>
        <UtilityButton color={colors.switchTrue}>Register</UtilityButton>
      </View>
    </ScrollView>
  );
};

export default LogIn;
