import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import { AppButton } from '../components/AppButton';
import colors from '../config/colors';
function WelcomeScreen(props) {
  const handlePress = () => {
    console.warn("Hola")
  }
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton key={uuid()} title="Login" onPress={handlePress} />
        <AppButton key={uuid()} title="Register" bgColor="secondary" onPress={handlePress} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    color: "#eee"
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  logoContainer: {
    top: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  }

})

export default WelcomeScreen;