import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import { v4 as uuid } from "uuid"
import AppSafeAreaView from '../components/AppSafeArea';
import { Card } from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: uuid(),
    title: "Red Jacket For Sale",
    price: 100,
    image: { uri: "https://picsum.photos/200/300" }
  },
  {
    id: uuid(),
    title: "Couch in Great Condition",
    price: 150,
    image: { uri: "https://picsum.photos/200/300" }
  },
]

const ListingsScreen = () => {
  return (
    <AppSafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        renderItem={({ item: { title, price, image, id } }) =>
          <Card
            title={title}
            subTitle={"$ " + price}
            image={image}
            key={id}

          />
        }
      />
    </AppSafeAreaView>
  );
};


ListingsScreen.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.lightGrey
  }
})

export default ListingsScreen;
