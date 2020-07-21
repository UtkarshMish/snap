import React from "react";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";

import styles from "./styles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required().email().max(25).label("Username"),
  password: Yup.string().required().min(5).label("Password"),
});

const LogIn = () => {
  const handleLogin = ({ username, password }) => {
    Alert.alert(
      "Success !",
      `Username: ${username} and Password: ${password}`,
      [{ text: "Ok" }]
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainTitle}>LOG IN</Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, errors }) => (
            <>
              <TextInput
                clearButtonMode="always"
                textContentType="emailAddress"
                keyboardType="email-address"
                style={styles.textStyle}
                onChangeText={handleChange("username")}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
              />
              <Text style={styles.errorMessage}>{errors.username}</Text>
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                style={styles.textStyle}
                autoCorrect={false}
                placeholder="Password"
              />
              <Text style={styles.errorMessage}>{errors.password}</Text>
              <View style={styles.buttonContainer}>
                <UtilityButton onPress={handleSubmit}>Login</UtilityButton>
                <UtilityButton color={colors.switchTrue}>
                  Register
                </UtilityButton>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default LogIn;
