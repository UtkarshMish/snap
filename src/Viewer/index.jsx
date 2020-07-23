import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import viewerStyles from './viewerStyles';
import UtilityButton from '../Components/Buttons';

import Player from '../Components/Player';

const bgImage = require('../../assets/bg-red-wall.jpg');

export default function Viewer({
	route: {
		params: { URI },
	},
}) {
	return (
		<SafeAreaView style={viewerStyles.container}>
			<View style={viewerStyles.buttonContainers}>
				<UtilityButton>next</UtilityButton>
				<UtilityButton failButton={true}>previous</UtilityButton>
			</View>

			{URI && <Player URI={URI} />}
		</SafeAreaView>
	);
}
