import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import playerStyles from './playerStyles';
import { Audio } from 'expo-av';
const Player = ({ URI, size = 56,
  style, ...rest
}) =>
{
  const [status, setStatus] = useState(false);
  const [music, setMusic] = useState(null);
  const iconType = status == false ? "play" : "pause";
  const pauseMusic = async (URI) =>
  {
    if (status == false && music == null) {
      const { sound, status: { isPlaying } } = await Audio.Sound.createAsync({ uri: URI }, { shouldPlay: true });
      setMusic(sound);
      setStatus(isPlaying);
    }
    else if (status == false && music != null) {
      const { isPlaying } = await music.playAsync();
      setStatus(isPlaying);
    }
    else {
      const { isPlaying } = await music.pauseAsync();
      setStatus(isPlaying);
    }



  }
  return (
    <View style={[style, playerStyles.container]}>
      <Icon name="backward" type="font-awesome" size={size} />
      <Icon name={iconType} type="font-awesome" onPress={() => pauseMusic(URI)} size={size} />
      <Icon name="forward" type="font-awesome" size={size} />
    </View>);
};

export default Player;
