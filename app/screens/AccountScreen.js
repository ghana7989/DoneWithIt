import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppSafeAreaView from '../components/AppSafeArea';
import { Icon } from '../components/Icon';
import { ListItem } from '../components/ListItem';
import { ListItemSeparator } from '../components/ListItemSeparator';
import colors from '../config/colors';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColour: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColour: colors.secondary
    }
  },
]

function AccountScreen() {
  return (
    <AppSafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ghana"
          subTitle="chindukuripavan@gmail.com"
          image={{ uri: "https://picsum.photos/200/300" }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item: { title, icon: {
            name, backgroundColour } } }) =>
            <ListItem title={title} IconComponent={
              <Icon name={name}
                backgroundColor={backgroundColour}
              />
            } />
          }
          ItemSeparatorComponent={ListItemSeparator}
        />

      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe666" />
        }
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.lightGrey
  }
})

export default AccountScreen;