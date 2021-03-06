import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { AppText } from '../AppText';
import listItemStyles from './ListItemStyles';
import colors from '../../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={listItemStyles.listContainer}>
          {IconComponent}
          {image && <Image style={listItemStyles.image} source={image} />}
          <View style={listItemStyles.detailsContainer}>
            <AppText style={listItemStyles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={listItemStyles.subTitle} numberOfLines={3}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons style={listItemStyles.icon} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  IconComponent: PropTypes.element
}

export default ListItem;