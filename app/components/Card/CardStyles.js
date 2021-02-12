import { StyleSheet } from 'react-native';
import colors from '../../config/colors';


const CardStyles = StyleSheet.create({
  card: {
    marginTop: 100,
    backgroundColor: colors.black,
    borderRadius: 15,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'cover'
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary
  }
})

export default CardStyles;