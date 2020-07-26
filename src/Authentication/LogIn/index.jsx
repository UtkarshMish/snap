import React from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';

import loginStyles from './loginStyles';
import UtilityButton from '../../Components/Buttons';
import colors from '../../../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../Components/Input';
import routes from '../../Components/Navigation/routes';

const validationSchema = Yup.object({
	username: Yup.string().required().email().max(100).label('Username'),
	password: Yup.string().required().min(5).label('Password'),
});

const LogIn = ({ navigation: { navigate } }) => {
	const handleLogin = ({ username, password }) => {
		Alert.alert('Success !', `Username: ${username} and Password: ${password}`, [{ text: 'Ok' }]);
		navigate(routes.DRAWER);
	};
	return (
		<View style={loginStyles.container}>
			<ScrollView
				style={loginStyles.mainContainer}
				canCancelContentTouches='false'
				keyboardShouldPersistTaps='always'
			>
				<Text style={loginStyles.mainTitle}>LOG IN</Text>
				<Formik
					initialValues={{ username: '', password: '' }}
					onSubmit={handleLogin}
					validationSchema={validationSchema}
				>
					{({ handleSubmit, handleChange, errors }) => (
						<>
							<View style={loginStyles.inputContainer}>
								<FormInput
									iconName='user-circle-o'
									type='font-awesome'
									clearButtonMode='always'
									textContentType='emailAddress'
									keyboardType='email-address'
									style={loginStyles.textStyle}
									onChangeText={handleChange('username')}
									placeholder='Username'
									autoCapitalize='none'
									autoCorrect={false}
									autoFocus={true}
								/>
								<Text style={loginStyles.errorMessage}>{errors.username}</Text>
								<FormInput
									iconName='key'
									type='foundation'
									clearButtonMode='always'
									secureTextEntry={true}
									textContentType='password'
									onChangeText={handleChange('password')}
									style={loginStyles.textStyle}
									autoCorrect={false}
									placeholder='Password'
								/>
								<Text style={loginStyles.errorMessage}>{errors.password}</Text>
							</View>
							<View style={loginStyles.buttonContainer}>
								<UtilityButton onPress={handleSubmit}>Login</UtilityButton>
								<UtilityButton onPress={() => navigate(routes.REGISTER)} color={colors.switchTrue}>
									Register
								</UtilityButton>
							</View>
						</>
					)}
				</Formik>
			</ScrollView>
		</View>
	);
};

export default LogIn;
