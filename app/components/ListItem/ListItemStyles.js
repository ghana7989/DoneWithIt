import colors from '../../config/colors';

const { StyleSheet } = require('react-native');

const listItemStyles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15
  },
  title: {
    fontWeight: "500",
    top: 5
  },
  subTitle: {
    color: colors.grey,
    top: 5
  }
})

export default listItemStyles;