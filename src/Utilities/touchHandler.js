import * as ImagePicker from 'expo-image-picker';

export async function handleMedia()
{
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (granted) {
    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled)
      return uri;
  }
}