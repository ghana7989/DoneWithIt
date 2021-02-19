import colors from '../../config/colors';

const { StyleSheet, Platform } = require('react-native');

const WIDTH_AND_HEIGHT = Platform.OS = "android" ? 60 : 70

const listItemStyles = StyleSheet.create({
  image: {
    width: WIDTH_AND_HEIGHT,
    height: WIDTH_AND_HEIGHT,
    borderRadius: 35,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontWeight: "500",
    top: 5
  },
  subTitle: {
    color: colors.grey,
    top: 5
  },
  icon: {
    alignSelf: "center",
    color: colors.grey
  }
})

export default listItemStyles;