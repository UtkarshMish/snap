import React from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import registerStyles from './registerStyles';
import UtilityButton from '../../Components/Buttons';
import colors from '../../../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../Components/Input';
const validationSchema = Yup.object({
	name: Yup.string().min(2).required().label('Name'),
	phone: Yup.number().lessThan(9999999999).required().label('Mobile Number'),
	email: Yup.string().email().required().max(100).label('Username'),
	password: Yup.string().required().min(5).label('Password'),
	confirmPassword: Yup.string()
		.required()
		.min(5)
		.oneOf([Yup.ref('password'), null], 'Password Must Match')
		.label('Confirmed Password'),
});
const Register = ({ navigation: { navigate } }) => {
	const handleRegister = ({ name, phone, email, password, confirmPassword }) => {
		Alert.alert('Success !', `Username: ${email} and Password: ${password}`, [{ text: 'Ok' }]);
		navigate('ContentSelector');
	};
	return (
		<View style={registerStyles.container}>
			<ScrollView style={registerStyles.inputContainer}>
				<Text style={registerStyles.mainTitle}>SIGN UP</Text>
				<Formik
					initialValues={{
						name: String(),
						phone: Number(),
						email: String(),
						password: String(),
						confirmPassword: String(),
					}}
					onSubmit={handleRegister}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleSubmit, errors }) => (
						<>
							<FormInput
								iconName='user-circle-o'
								type='font-awesome'
								clearButtonMode='always'
								textContentType='name'
								keyboardType='default'
								style={registerStyles.textStyle}
								onChangeText={handleChange('name')}
								placeholder='Name'
								autoCapitalize='words'
								autoCorrect={false}
								autoFocus={true}
							/>
							<Text style={registerStyles.error}>{errors.name}</Text>
							<FormInput
								iconName='phone-in-talk'
								type='material-icon'
								clearButtonMode='always'
								textContentType='telephoneNumber'
								keyboardType='number-pad'
								style={registerStyles.textStyle}
								onChangeText={handleChange('phone')}
								placeholder='Mobile Number'
								autoCapitalize='none'
								autoCorrect={false}
							/>
							<Text style={registerStyles.error}>{errors.phone}</Text>
							<FormInput
								iconName='email'
								type='material-icon'
								clearButtonMode='always'
								textContentType='emailAddress'
								keyboardType='email-address'
								style={registerStyles.textStyle}
								onChangeText={handleChange('email')}
								placeholder='Username'
								autoCapitalize='none'
								autoCorrect={false}
							/>
							<Text style={registerStyles.error}>{errors.email}</Text>
							<FormInput
								iconName='key'
								type='foundation'
								clearButtonMode='always'
								secureTextEntry={true}
								textContentType='password'
								onChangeText={handleChange('password')}
								style={registerStyles.textStyle}
								autoCorrect={false}
								placeholder='Password'
							/>
							<Text style={registerStyles.error}>{errors.password}</Text>
							<FormInput
								iconName='key'
								type='foundation'
								clearButtonMode='always'
								secureTextEntry={true}
								textContentType='password'
								onChangeText={handleChange('confirmPassword')}
								style={registerStyles.textStyle}
								autoCorrect={false}
								placeholder='Confirm Password'
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
			</ScrollView>
		</View>
	);
};

export default Register;
