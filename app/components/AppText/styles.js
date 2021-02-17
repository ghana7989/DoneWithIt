import { TEXT } from '../../config/styles'

const { StyleSheet } = require('react-native')




const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...TEXT
  }
})

export default styles