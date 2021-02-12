import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { AppText } from '../components/AppText';
import { ListItem } from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$50</AppText>
        <View style={styles.listItemContainer}>
          <ListItem title="Ghana" subTitle="5 Listings" image={""} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  listItemContainer: {
    marginTop: 30
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 20
  }
})

export default ListingDetailsScreen;