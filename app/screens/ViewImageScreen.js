import React from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MaterialCommunityIcons name="close" color="white" size={40} />
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={40}
          />
        </View>
      </View>

      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    alignItems: "flex-start",
    position: "absolute",
    flexDirection: "row",
    top: 40,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
  },
});

export default ViewImageScreen;
