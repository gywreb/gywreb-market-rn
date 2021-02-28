import React from "react";
import { StyleSheet, Text } from "react-native";

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "red",
  },
});

export default AppErrorMessage;
