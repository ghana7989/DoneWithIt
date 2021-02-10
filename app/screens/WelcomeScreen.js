import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center"
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