import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
export async function handleMedia()
{
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (granted) {
    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled)
      return uri;
  }
}
export async function handleMusic()
{
  const { type, uri } = await DocumentPicker.getDocumentAsync({ type: 'audio/*', copyToCacheDirectory: false });
  if (type == "success") {
    return uri;
  }
}