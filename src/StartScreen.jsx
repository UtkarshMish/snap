import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, Image, BackHandler } from 'react-native';
import colors from '../config/colors';
const bgImage = require('../assets/bg-red-wall.jpg');
export default function StartScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={bgImage} style={styles.backgroundImage} />
      < View style={styles.sideContent} >
        <Text style={styles.titleText}>Snap</Text>
        <Text style={styles.text}>An Entertainment Platform !</Text>
      </View>
      <View style={styles.buttonContainer} >
        <Button color={'#5521DD'} title={'Get Started'} />
        <Button onPress={BackHandler.exitApp} color={'#DD1255'} title={'Exit'} />
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    top: '3%',
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  sideContent: {
    flex: 1,
    position: 'relative',
    top: '30%',
    flexDirection: 'column',
  },

  titleText: {
    fontSize: 55,
    textAlign: 'center',
    color: colors.primary,
    padding: 15,
    fontWeight: "800",
  },
  text: {
    fontSize: 30,
    color: colors.secondary,
    textAlign: 'center',
    fontWeight: "700",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  buttonContainer: {
    margin: 5,
  }
});
