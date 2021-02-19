import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../../config/colors';
import { TEXT } from '../../config/styles';

const AppTextInput = ({ icon, height = 50, width, ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {
        icon && <MaterialCommunityIcons name={icon} size={25} color={colors.grey} style={styles.icon} />
      }
      <TextInput placeholderTextColor={colors.grey} style={[TEXT, { height: height, }]} {...otherProps} clearTextOnFocus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 25,
  },

  icon: {
    margin: 10
  }
})

export default AppTextInput;