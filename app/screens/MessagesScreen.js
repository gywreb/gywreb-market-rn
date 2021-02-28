import React, { useState } from "react";
import { FlatList } from "react-native";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const initialMessages = [
  {
    id: 1,
    title:
      "Voluptate ea pariatur tempor aliqua nostrud excepteur et. Amet veniam incididunt sint et duis non. Ea enim id ad in id excepteur nisi magna veniam commodo sunt. Nulla amet magna quis pariatur voluptate aliqua elit enim in aliqua laborum id id.",
    description:
      "Esse ipsum amet ea nisi pariatur enim non duis cillum laboris. Proident ipsum esse consectetur aliquip id. Consectetur excepteur fugiat pariatur sint proident dolor reprehenderit duis proident. Ad laborum ipsum pariatur ullamco est. Consectetur minim excepteur laboris id est et id est. Laborum velit aliqua labore laboris ut fugiat dolore enim labore Lorem eiusmod. Lorem ea irure tempor aliquip velit aliqua. Et et commodo ad eu consequat dolor.",
    image: require("../assets/gywreb.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/gywreb.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleRefresh = () => {
    setMessages([...initialMessages]);
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </AppScreen>
  );
};

export default MessagesScreen;
