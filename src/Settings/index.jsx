import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import settingStyles from './settingStyles';
import colors from '../../config/colors';
import SettingBox from '../Components/SettingBox';

export default function Settings() {
	const [isEnabled, setIsEnabled] = React.useState(false);
	const toggleSwitch = () =>
		setIsEnabled((previousState) => {
			settingStyles.bgColor = previousState
				? {
						backgroundColor: colors.backgroundWhite,
						color: colors.backgroundDark,
				  }
				: {
						backgroundColor: colors.backgroundDark,
						color: colors.backgroundWhite,
				  };
			return !previousState;
		});
	return (
		<SafeAreaView style={[settingStyles.container, settingStyles.bgColor]}>
			<View style={settingStyles.sideContent}>
				<Text style={[settingStyles.mainTitle, settingStyles.bgColor]}>User Settings</Text>
			</View>
			<SettingBox toggleSwitch={toggleSwitch} isEnabled={isEnabled} bgColor={settingStyles.bgColor}>
				Background Color
			</SettingBox>
		</SafeAreaView>
	);
}
