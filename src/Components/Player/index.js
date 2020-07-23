import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import playerStyles from './playerStyles';
import { Audio } from 'expo-av';
import { playerTime } from '../../Utilities/timeMethods';

const Player = ({
  URI, size = 56, autoPlay = false,
  style, ...rest
}) =>
{
  const [status, setStatus] = useState(false);
  const [music, setMusic] = useState(null);
  const [positionMillis, setPositionMillis] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  useEffect(() =>
  {
    const Timer = setTimeout(() => getTime(), 1000);
    return () => clearInterval(Timer);
  }, [positionMillis, status]);

  const iconType = status == false ? "play" : "pause";
  const pauseMusic = async () =>
  {
    if (status == false && music != null) {
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
      const status = await music.getStatusAsync();
      console.log(status);
      setPositionMillis(status.positionMillis);
      setTotalDuration(status.durationMillis);
    }
  }

  const seekMusic = async (posInSec) =>
  {
    const { positionMillis } = await music.getStatusAsync();
    const status = await music.setPositionAsync(positionMillis + (posInSec * 1000));
  }
  const startMusic = async () =>
  {
    if (music == null) {
      const { sound, status: { isPlaying } } = await Audio.Sound.createAsync({ uri: URI }, { shouldPlay: autoPlay });
      setMusic(sound);
      setStatus(isPlaying);
    }
  }
  startMusic();
  return (
    <View style={[style, playerStyles.container]} {...rest} >
      <Text>  {playerTime(positionMillis) + " / " + playerTime(totalDuration)} </Text>
      <Icon name="backward" type="font-awesome" onPress={() => seekMusic(-15)} size={size} />
      <Icon name={iconType} type="font-awesome" onPress={pauseMusic} size={size} />
      <Icon name="forward" type="font-awesome" onPress={() => seekMusic(15)} size={size} />
    </View>);
};

export default Player;
