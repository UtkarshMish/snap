import * as React from 'react';
import { View, Text, SafeAreaView, BackHandler, Alert, ImageBackground } from 'react-native';

import screenStyles from './screenStyles';
import UtilityButton from '../Components/Buttons';
import routes from '../Components/Navigation/routes';
const bgImage = require('../../assets/HomeScreen.gif');
export default function StartScreen({ navigation }) {
	return (
		<SafeAreaView style={screenStyles.mainContainer}>
			<ImageBackground source={bgImage} blurRadius={100} style={screenStyles.backgroundImage} />
			<View style={screenStyles.sideContent}>
				<Text style={screenStyles.titleText}>Snap</Text>
				<Text style={screenStyles.text}>An Entertainment Platform !</Text>
			</View>
			<View style={screenStyles.buttonContainer}>
				<UtilityButton onPress={() => navigation.navigate(routes.LOGIN)}>Get Started</UtilityButton>
				<UtilityButton failButton={true} onPress={alertExit}>
					Exit
				</UtilityButton>
			</View>
		</SafeAreaView>
	);
}
function alertExit() {
	return Alert.alert('Are You Sure ?', 'Press Yes to Exit this Application', [
		{ text: 'Cancel', style: 'destructive' },
		{ text: 'Yes', onPress: BackHandler.exitApp, style: 'cancel' },
	]);
}
