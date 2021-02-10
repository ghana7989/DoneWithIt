
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.topButtonsContainer}>
        <View style={styles.deleteIcon} />
        <View style={styles.closeIcon} />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    right: 10,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    left: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'red',
    width: "100%",
    position: "absolute",
    top: 50
  }
})


export default ViewImageScreen;