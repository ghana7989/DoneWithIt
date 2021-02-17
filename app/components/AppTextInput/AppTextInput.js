import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../../config/colors';
import { TEXT } from '../../config/styles';

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {
        icon && <MaterialCommunityIcons name={icon} size={25} color={colors.grey} style={styles.icon} />
      }
      <TextInput style={TEXT} {...otherProps} clearTextOnFocus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25
  },

  icon: {
    margin: 10
  }
})

export default AppTextInput;