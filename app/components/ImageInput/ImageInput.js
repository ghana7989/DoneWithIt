import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../../config/colors';

function ImageInput({ imageUri, onChangeImage }) {

  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (access) return
    requestPermission()
  }, [access])

  function handlePress() {
    if (!access) requestPermission()
    else if (!imageUri) selectImage()
    else Alert.alert("Delete", "Are you sure you want to delete image?",
      [{ text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" }]
    )
  }

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) {
      alert("You need to enable permission to access the library")
      setAccess(false)
    }
    else {
      setAccess(true)
    }

  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.warn("Error reading the image")
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View style={styles.container}>
        {!imageUri ? <MaterialCommunityIcons
          name="camera"
          color={colors.grey}
          size={50}

        /> :
          <Image
            style={styles.image}
            source={{ uri: imageUri }} />
        }
      </View>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
    margin: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
})
export default ImageInput;