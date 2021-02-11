import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';


function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
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
  onPress: PropTypes.func.isRequired
}

export default AppButton;