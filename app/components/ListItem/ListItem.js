import React from 'react';
import { Image, View } from 'react-native';
import { AppText } from '../AppText';
import listItemStyles from './ListItemStyles';

function ListItem({ title, subTitle, image }) {
  return (
    <View style={listItemStyles.listContainer}>
      <Image style={listItemStyles.image} source={{ uri: "https://source.unsplash.com/random" }} />
      <View >
        <AppText style={listItemStyles.title}>{title}</AppText>
        <AppText style={listItemStyles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;