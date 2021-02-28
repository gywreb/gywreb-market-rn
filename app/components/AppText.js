import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

import Constants from "expo-constants";

const AppText = ({ children, style, ...componentProps }) => {
  return (
    <Text style={[styles.text, style ? style : null]} {...componentProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
