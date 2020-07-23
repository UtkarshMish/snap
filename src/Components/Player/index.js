import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import playerStyles from './playerStyles';
import { Audio } from 'expo-av';
import { playerTime } from '../../Utilities/timeMethods';
const Player = ({ URI, size = 56,
  style, ...rest
}) =>
{
  const [status, setStatus] = useState(false);
  const [music, setMusic] = useState(null);
  const [positionMillis, setPositionMillis] = useState(0);
  const iconType = status == false ? "play" : "pause";
  const pauseMusic = async () =>
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
  const getTime = async () =>
  {
    if (music) {
      const { positionMillis } = await music.getStatusAsync();
      setPositionMillis(positionMillis);
    }
  }

  const seekMusic = async (posInSec) =>
  {
    const { positionMillis } = await music.getStatusAsync();
    const status = await music.setPositionAsync(positionMillis + (posInSec * 1000));
  }
  setTimeout(getTime, 1000);
  return (
    <View style={[style, playerStyles.container]} {...rest} >
      <Text>  {playerTime(positionMillis)} </Text>
      <Icon name="backward" type="font-awesome" onPress={() => seekMusic(-15)} size={size} />
      <Icon name={iconType} type="font-awesome" onPress={pauseMusic} size={size} />
      <Icon name="forward" type="font-awesome" onPress={() => seekMusic(15)} size={size} />
    </View>);
};

export default Player;
