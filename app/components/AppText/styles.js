const { StyleSheet, Platform } = require('react-native')

const platformDependantStyles = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir"
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto"
  },
})


const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...platformDependantStyles
  }
})

export default styles