import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from "react-native-gesture-handler/Swipeable"

import { AppText } from '../AppText';
import listItemStyles from './ListItemStyles';
import colors from '../../config/colors';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  const imageSource = image ? image : { uri: "https://source.unsplash.com/random" }
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={listItemStyles.listContainer}>
          <Image style={listItemStyles.image} source={imageSource} />
          <View >
            <AppText style={listItemStyles.title}>{title}</AppText>
            <AppText style={listItemStyles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.object,
  onPress: PropTypes.func.isRequired,
}

export default ListItem;