
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.topButtonsContainer}>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="trash-can-outline" color="red" size={35} />
        </View>
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

    right: 10,
  },
  deleteIcon: {
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