import Constants from "expo-constants"
import { StyleSheet } from 'react-native'

const AppSafeAreaStyles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: Constants.statusBarHeight
  }
})

export default AppSafeAreaStyles;