import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { v4 as uuid } from 'uuid';

import { ListItem } from '../components/ListItem';
import initialMessages from '../utils/messages';
import AppSafeAreaView from '../components/AppSafeArea';
import { ListItemSeparator } from '../components/ListItemSeparator';
import { ListItemDeleteAction } from '../components/ListItemActions';



function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from the array
    setMessages(messages.filter(m => m.id !== message.id))
    // TODO : Call the server
  }

  return (
    <AppSafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={() => uuid()}
        renderItem={({ item }) =>
          <ListItem
            key={uuid()}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.warn("Message Selected", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)}
              />
            }
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(
            [
              {
                id: 2,
                title: "Title 2",
                description: "Description 2",
                image: { uri: "https://picsum.photos/200/300" }
              }
            ]
          )
        }}
      >
      </FlatList>
    </AppSafeAreaView>
  );
}


export default MessagesScreen;