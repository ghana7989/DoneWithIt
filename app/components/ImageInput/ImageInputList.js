import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      <ImageInput onChangeImage={uri => onAddImage(uri)} />
      {imageUris.map(uri =>
        <View
          key={uri}
          style={styles.image}
        >
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  image: {
    
  }
})
export default ImageInputList;