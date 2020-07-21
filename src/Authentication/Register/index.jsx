import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
const Register = () => {
  const handleRegister = () => {
    Alert.alert(
      "Success !",
      `Username: ${username} and Password: ${password}`,
      [{ text: "No" }, { text: "Yes" }]
    );
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainTitle}>SIGN UP</Text>
        <TextInput
          clearButtonMode="always"
          textContentType="name"
          keyboardType="default"
          style={styles.textStyle}
          onChangeText={(name) => setName(name)}
          placeholder="Name"
          autoCapitalize="words"
          autoCorrect={false}
          autoFocus={true}
        />
        <TextInput
          clearButtonMode="always"
          textContentType="telephoneNumber"
          keyboardType="number-pad"
          style={styles.textStyle}
          onChangeText={(phone) => setPhone(phone)}
          placeholder="Mobile Number"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          clearButtonMode="always"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.textStyle}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          clearButtonMode="always"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(password) => setPassword(password)}
          style={styles.textStyle}
          autoCorrect={false}
          placeholder="Password"
        />
        <TextInput
          clearButtonMode="always"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          style={styles.textStyle}
          autoCorrect={false}
          placeholder="Confirm Password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <UtilityButton color={colors.switchTrue} onPress={handleRegister}>
          Sign Up
        </UtilityButton>
      </View>
    </ScrollView>
  );
};

export default Register;
