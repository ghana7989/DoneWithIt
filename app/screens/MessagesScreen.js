import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { v4 as uuid } from 'uuid';

import { ListItem } from '../components/ListItem';
import messages from '../utils/messages';
import AppSafeAreaView from '../components/AppSafeArea';
import { ListItemSeparator } from '../components/ListItemSeparator';



function MessagesScreen() {
  return (
    <AppSafeAreaView>

      <FlatList
        data={messages}
        keyExtractor={() => uuid()}
        renderItem={({ item }) =>
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
      >
      </FlatList>
    </AppSafeAreaView>
  );
}


export default MessagesScreen;