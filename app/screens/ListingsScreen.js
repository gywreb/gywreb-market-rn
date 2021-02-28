import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
    paddingHorizontal: Dimensions.get("screen").width * 0.05,
  },
});

export default ListingsScreen;
