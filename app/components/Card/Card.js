import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import CardStyles from './CardStyles';
import { AppText } from '../AppText';

function Card({ title, subTitle, image }) {
  return (
    <View style={CardStyles.card}>
      <Image source={image} style={CardStyles.image} />
      <View style={CardStyles.detailsContainer}>
        <AppText style={CardStyles.title}>{title}</AppText>
        <AppText style={CardStyles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

Card.prototypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Card;