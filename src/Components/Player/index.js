import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import playerStyles from './playerStyles';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { playerTime } from '../../Utilities/timeMethods';
import Slider from '@react-native-community/slider';
import colors from '../../../config/colors';
const Player = ({
  URI, size = 62, autoPlay = false, controllerColors = colors.backgroundDark,
  style, ...rest
}) =>
{
  const pauseMusic = async () =>
  {
    if (paused == false && music != null) {
      const { isPlaying } = await music.playAsync();
      setPaused(isPlaying);
    }
    else {
      const { isPlaying } = await music.pauseAsync();
      setPaused(isPlaying);
    }
  }
  const getTime = async () =>
  {
    if (music) {
      const status = await music.getStatusAsync();
      setPositionMillis(status.positionMillis);
      setTotalDuration(status.durationMillis);
    }
  }

  const seekMusic = async (posInSec, seek = true) =>
  {

    const { positionMillis } = await music.getStatusAsync();
    const newPosition = seek == true ? positionMillis + (posInSec * 1000) : posInSec;
    await music.setPositionAsync(newPosition);

    if (newPosition <= 0)
      setPositionMillis(0);
    else if (newPosition >= totalDuration)
      setPositionMillis(totalDuration);
    else
      setPositionMillis(newPosition);
  }
  const startMusic = async () =>
  {
    if (music == null) {
      const { sound, status: { isPlaying, durationMillis } } = await Audio.Sound.createAsync({ uri: URI }, { shouldPlay: autoPlay });
      setMusic(sound);
      setPaused(isPlaying);
      setTotalDuration(durationMillis);
    }
  }
  const replayMusic = async () => { await music.replayAsync(); setPositionMillis(0); }
  const [paused, setPaused] = useState(false);
  const [music, setMusic] = useState(null);
  const [positionMillis, setPositionMillis] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  useEffect(() =>
  {
    const Timer = setTimeout(() => getTime(), 1000);
    return () => clearInterval(Timer);
  }, [positionMillis, paused]);



  startMusic();
  const [iconType, handlePress] = (positionMillis == totalDuration) && (music != null) ?
    ["replay", replayMusic] : [paused == false ? "play-arrow" : "pause", pauseMusic];
  return (

    <View style={[style, playerStyles.container]} {...rest}>
      <LinearGradient colors={[colors.caesarRadiantA, colors.caesarRadiantB]} style={playerStyles.gradientBackground}>
        <View style={playerStyles.SeekBar}>
          <Slider
            thumbTintColor={colors.secondary}
            minimumTrackTintColor={colors.fontColor}
            maximumTrackTintColor={colors.borderColor}
            value={positionMillis}
            onSlidingComplete={async (pos) => await seekMusic(pos, false)}
            maximumValue={totalDuration}
            minimumValue={0}
          />
          <Text>  {playerTime(positionMillis) + " / " + playerTime(totalDuration)} </Text>
        </View>
        <View style={playerStyles.subContainer}  >
          <LinearGradient colors={[colors.transparent, colors.gradientColor, colors.transparent]} style={playerStyles.gradientController}><Icon name="skip-previous" type="material-icon" onPress={() => seekMusic(-15)} size={size} color={controllerColors} iconStyle={playerStyles.iconStyles} /></LinearGradient>
          <LinearGradient colors={[colors.transparent, colors.gradientColor, colors.transparent]} style={playerStyles.gradientController}><Icon name={iconType} type="material-icon" onPress={handlePress} size={size} color={controllerColors} iconStyle={playerStyles.iconStyles} /></LinearGradient>
          <LinearGradient colors={[colors.transparent, colors.gradientColor, colors.transparent]} style={playerStyles.gradientController}><Icon name="skip-next" type="material-icon" onPress={() => seekMusic(15)} size={size} color={controllerColors} iconStyle={playerStyles.iconStyles} /></LinearGradient>
        </View>
      </LinearGradient>
    </View>


  );


};

export default Player;
