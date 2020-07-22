import React from "react";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";

import loginStyles from "./loginStyles";
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
    <ScrollView style={loginStyles.container}>
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.mainTitle}>LOG IN</Text>
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
                style={loginStyles.textStyle}
                onChangeText={handleChange("username")}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
              />
              <Text style={loginStyles.errorMessage}>{errors.username}</Text>
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                style={loginStyles.textStyle}
                autoCorrect={false}
                placeholder="Password"
              />
              <Text style={loginStyles.errorMessage}>{errors.password}</Text>
              <View style={loginStyles.buttonContainer}>
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
