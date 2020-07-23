import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import selectorStyles from './selectorStyles';
import Card from '../Components/Card';
import colors from '../../config/colors';
import { handleMedia, handleMusic } from '../Utilities/touchHandler';

export default function ContentSelector({ navigation }) {
	const [resource, setResource] = useState(null);
	async function handleAudio(navigate) {
		const URI = await handleMusic();
		if (URI) navigation.navigate('Viewer', { URI });
	}
	return (
		<View style={selectorStyles.container}>
			<Image
				resizeMode='cover'
				blurRadius={21}
				style={{ position: 'absolute' }}
				source={{ width: '100%', height: '100%', uri: resource }}
			/>
			<View style={selectorStyles.subContainer}>
				<Text style={selectorStyles.textStyle}>Select Your Media Content</Text>
			</View>
			<View style={selectorStyles.subContainer}>
				<Card title='Movies' name='film' type='font-awesome' color={colors.movieColor} size={64} />

				<Card title='Live TV' name='tv' type='font-awesome' color={colors.tvColor} size={64} />
				<Card
					onPress={async () => setResource(await handleMedia())}
					title='Media'
					name='play-circle'
					type='font-awesome'
					color={colors.mediaColor}
					size={64}
				/>
				<Card
					title='Music'
					onPress={handleAudio}
					name='music'
					type='font-awesome'
					color={colors.musicColor}
					size={64}
				/>
				<Card
					title='Web Series'
					name='live-tv'
					type='material'
					color={colors.webSeriesColor}
					size={64}
				/>
				<Card title='Radio' name='radio' type='material' color={colors.radioColor} size={64} />
			</View>
		</View>
	);
}
