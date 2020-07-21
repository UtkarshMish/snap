import React from "react";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
import { Formik } from "formik";
const Register = () => {
  const handleRegister = ({
    name,
    phone,
    email,
    password,
    confirmPassword,
  }) => {
    Alert.alert("Success !", `Username: ${email} and Password: ${password}`, [
      { text: "Ok" },
    ]);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainTitle}>SIGN UP</Text>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <TextInput
                clearButtonMode="always"
                textContentType="name"
                keyboardType="default"
                style={styles.textStyle}
                onChangeText={handleChange("name")}
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
                onChangeText={handleChange("phone")}
                placeholder="Mobile Number"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                clearButtonMode="always"
                textContentType="emailAddress"
                keyboardType="email-address"
                style={styles.textStyle}
                onChangeText={handleChange("email")}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                style={styles.textStyle}
                autoCorrect={false}
                placeholder="Password"
              />
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("confirmPassword")}
                style={styles.textStyle}
                autoCorrect={false}
                placeholder="Confirm Password"
              />
              <View style={styles.buttonContainer}>
                <UtilityButton color={colors.switchTrue} onPress={handleSubmit}>
                  Sign Up
                </UtilityButton>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Register;
