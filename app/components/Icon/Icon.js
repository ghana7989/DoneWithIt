import React from 'react';
import PropType from "prop-types"
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

function Icon({ name, size = 35, backgroundColor = "black", iconColor = "white" }) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: +(size / 2),
      backgroundColor,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

Icon.propType = {
  name: PropType.string.isRequired,
  size: PropType.number.isRequired,
  backgroundColor: PropType.string.isRequired,
  iconColor: PropType.string.isRequired
}

const styles = StyleSheet.create({

})

export default Icon;