import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import colors from '../../config/colors';


function AppButton({ title, onPress, bgColor = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
      onPress={onPress}
    >
      <Text
        style={styles.text}
      >{title}</Text>
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  bgColor: PropTypes.oneOf["primary", "secondary", "black", "white"]
}

export default AppButton;