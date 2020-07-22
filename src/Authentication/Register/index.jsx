import React from "react";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";
import registerStyles from "./registerStyles";
import UtilityButton from "../../Components/Buttons";
import colors from "../../../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().min(2).required().label("Name"),
  phone: Yup.number().min(10).max(10).required().label("Mobile Number"),
  email: Yup.string().email().required().max(25).label("Username"),
  password: Yup.string().required().min(5).label("Password"),
  confirmPassword: Yup.string().required().min(5).label("Confirmed Password"),
});
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
    <ScrollView style={registerStyles.container}>
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.mainTitle}>SIGN UP</Text>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <TextInput
                clearButtonMode="always"
                textContentType="name"
                keyboardType="default"
                style={registerStyles.textStyle}
                onChangeText={handleChange("name")}
                placeholder="Name"
                autoCapitalize="words"
                autoCorrect={false}
                autoFocus={true}
              />
              <Text style={registerStyles.error}>{errors.name}</Text>
              <TextInput
                clearButtonMode="always"
                textContentType="telephoneNumber"
                keyboardType="number-pad"
                style={registerStyles.textStyle}
                onChangeText={handleChange("phone")}
                placeholder="Mobile Number"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text style={registerStyles.error}>{errors.phone}</Text>
              <TextInput
                clearButtonMode="always"
                textContentType="emailAddress"
                keyboardType="email-address"
                style={registerStyles.textStyle}
                onChangeText={handleChange("email")}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text style={registerStyles.error}>{errors.email}</Text>
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                style={registerStyles.textStyle}
                autoCorrect={false}
                placeholder="Password"
              />
              <Text style={registerStyles.error}>{errors.password}</Text>
              <TextInput
                clearButtonMode="always"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("confirmPassword")}
                style={registerStyles.textStyle}
                autoCorrect={false}
                placeholder="Confirm Password"
              />
              <Text style={registerStyles.error}>{errors.confirmPassword}</Text>
              <View style={registerStyles.buttonContainer}>
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
