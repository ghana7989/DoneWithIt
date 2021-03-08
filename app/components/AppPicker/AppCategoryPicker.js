import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from '../AppText';
import { Icon } from '../Icon';

function AppCategoryPicker({ onPress, item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "33.3%"
  },
  text: {
    marginTop: 10,
    textAlign: "center",
  }
})
export default AppCategoryPicker;